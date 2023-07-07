import { CheerioAPI, load } from 'cheerio'

import { getMetaAsDict } from './lib'
import { Meta } from './models'

/* test change */

const addMetaToHead = ($: CheerioAPI, name: string, value: string | object) => {
  if (typeof value === 'string') {
    const newMeta = `<meta property="${name}" content="${value}" />`
    const existingMeta = $(`head meta[property="${name}"]`)
    if (existingMeta?.length) {
      existingMeta.replaceWith(newMeta)
    } else {
      $('head').append(newMeta)
    }
  } else if (Array.isArray(value)) {
    value.map((item) => addMetaToHead($, `${name}`, item))
  } else if (typeof value === 'object') {
    Object.entries(value).map(([key, value]) => {
      if (key === 'url') {
        addMetaToHead($, name, value)
      } else {
        addMetaToHead($, `${name}:${key}`, value)
      }
    })
  } else {
    throw Error(`Invalid item type [${name}, ${typeof value}]`)
  }
}

export const metaBuilder = (html: string, meta: Meta) => {
  const $ = load(html)
  // NOTE: This assumes unique meta properties (no duplicates)
  // which is generally the case, but not always (you can have
  // multiple og:video:tag tags, for example)
  const metaProperties = getMetaAsDict(meta)
  Object.entries(metaProperties).forEach(([key, value]) => {
    if (value) addMetaToHead($, key, value)
  })
  if (meta.description) {
    addMetaToHead($, 'description', meta.description)
  }
  if (meta.title) {
    addMetaToHead($, 'title', meta.title)
    $('head title').html(meta.title)
  }
  return $.html()
}
