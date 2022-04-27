import { CheerioAPI, load } from 'cheerio'

import { Meta } from './models'

/* test change */

const addMetaToHead = ($: CheerioAPI, name: string, value: string | object) => {
  if (typeof value === 'string') {
    $('head').append(`<meta property="${name}" content="${value}" />`)
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
  if (meta.og) {
    Object.entries(meta.og).map(([key, value]) => {
      addMetaToHead($, `og:${key}`, value)
    })
  }
  if (meta.twitter) {
    Object.entries(meta.twitter).map(([key, value]) => {
      addMetaToHead($, `twitter:${key}`, value)
    })
  }
  if (meta.description) {
    addMetaToHead($, 'description', meta.description)
  }
  if (meta.title) {
    addMetaToHead($, 'title', meta.title)
    $('head title').html(meta.title)
  }
  return $.html()
}
