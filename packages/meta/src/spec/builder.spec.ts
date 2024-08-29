import { readFile } from 'node:fs/promises'
import Path from 'node:path'

import { getMetaAsDict } from '../lib/index.ts'
import { metaBuilder } from '../meta/index.ts'
import type {
  Meta, OpenGraphMeta, TwitterMeta,
} from '../models/index.ts'

const title = 'Death Valley Wilderness: Wilderness Light'
const description
  // eslint-disable-next-line @stylistic/max-len
  = 'Follow the course of light through the Death Valley Wilderness and observe the obvious and subtle changes across the landscape.Produced by Sylvia JohnsonTo w...'

const meta: Meta = { description, title }

const og: OpenGraphMeta = {
  description,
  image: {
    '': 'https://i.ytimg.com/vi/Kauv7MVPcsA/maxresdefault.jpg',
    'height': 720,
    'width': 1280,
  },
  site_name: 'YouTube',
  title,
  type: 'video.other',
  url: 'https://www.youtube.com/watch?v=Kauv7MVPcsA',
  video: {
    height: 720,
    secure_url: 'https://www.youtube.com/embed/Kauv7MVPcsA',
    // TODO: Multiple tags
    // tag: ['Light', 'Death Valley'],
    type: 'text/html',
    url: 'https://www.youtube.com/embed/Kauv7MVPcsA',
    width: 1280,
  },
}

const twitter: TwitterMeta = {
  app: {
    id: {
      googleplay: 'com.google.android.youtube',
      ipad: '544007664',
      iphone: '544007664',
    },
    name: {
      googleplay: 'YouTube',
      ipad: 'YouTube',
      iphone: 'YouTube',
    },
    url: {
      googleplay: 'https://www.youtube.com/watch?v=Kauv7MVPcsA',
      ipad: 'vnd.youtube://www.youtube.com/watch?v=Kauv7MVPcsA&amp;feature=applinks',
      iphone: 'vnd.youtube://www.youtube.com/watch?v=Kauv7MVPcsA&amp;feature=applinks',
    },
  },
  card: 'summary',
  description,
  image: { '': 'https://www.twitter.com/image/url' },
  player: {
    '': 'https://www.youtube.com/watch?v=Kauv7MVPcsA',
    'height': 720,
    'width': 1028,
  },
  site: { '': '@youtube' },
  title,
}

describe('builder', () => {
  it('Generates head meta if none exists', () => {
    const html = '<html/>'
    const output = metaBuilder(html, meta)
    expect(output).toBeDefined()
  })
  describe('Adds meta', () => {
    let html: string
    beforeAll(async () => {
      const template = Path.join(__dirname, 'template.html')
      html = await readFile(template, { encoding: 'utf8' })
    })
    const cases: [title: string, meta: Meta][] = [
      ['Open Graph (OG)', { ...meta, og }],
      ['Twitter', { ...meta, twitter }],
    ]
    it.each(cases)('%s', (_, meta) => {
      const output = metaBuilder(html, meta)
      expect(output).toContain(meta.description)
      expect(output).toContain(`<title>${meta.title}</title>`)
      const metaProperties = getMetaAsDict(meta)
      for (const [property, content] of Object.entries(metaProperties)) {
        expect(output).toContain(`<meta property="${property}" content="${content}">`)
      }
      expect(output).toMatchSnapshot()
    })
  })
  it('Overwrites existing values with new values', () => {
    const oldImage = 'https://example.com/oldimage.jpg'
    const newImage = 'https://example.com/newimage.jpg'
    const html = `
<!doctype html>
<html lang="en">
<head>
  <title>XYO 2.0</title>
  <meta property="og:image" content="${oldImage}">
  <meta property="twitter:image" content="${oldImage}">
</head>
<body></body>
</html>
    `
    const meta: Meta = {
      og: { image: newImage },
      twitter: { image: { '': newImage } },
    }
    const properties = ['og:image', 'twitter:image']
    for (const property of properties) {
      expect(html).toContain(`<meta property="${property}" content="${oldImage}">`)
    }
    const output = metaBuilder(html, meta)
    for (const property of properties) {
      expect(output).not.toContain(`<meta property="${property}" content="${oldImage}">`)
      expect(output).toContain(`<meta property="${property}" content="${newImage}">`)
    }
    expect(output).toMatchSnapshot()
  })
})
