import { metaBuilder } from '../builder'
import { Meta } from '../models'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type StringIndexable = { [key: string]: any }

const createMetaPropertiesDict = (obj: StringIndexable, parentKey = ''): StringIndexable => {
  let flatRecord: StringIndexable = {}
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      // If the value is another object, we want to iterate through its keys as well.
      const childRecord = createMetaPropertiesDict(obj[key] as StringIndexable, `${parentKey}${key}:`)
      flatRecord = { ...flatRecord, ...childRecord }
    } else {
      // Concatenate the key with its parent key.
      const newKey = parentKey ? `${parentKey}${key}` : key
      flatRecord[newKey] = obj[key]
    }
  }
  return flatRecord
}
const title = 'Death Valley Wilderness: Wilderness Light'
const description =
  'Follow the course of light through the Death Valley Wilderness and observe the obvious and subtle changes across the landscape.Produced by Sylvia JohnsonTo w...'
const meta: Meta = {
  description,
  og: {
    description,
    image: {
      '': 'https://i.ytimg.com/vi/Kauv7MVPcsA/maxresdefault.jpg',
      height: 720,
      width: 1280,
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
  },
  title,
  twitter: {
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
    image: {
      '': 'https://www.twitter.com/image/url',
    },
    player: {
      '': 'https://www.youtube.com/watch?v=Kauv7MVPcsA',
      height: 555,
      width: 666,
    },
    site: {
      '': '@youtube',
    },
    title,
  },
}

describe('builder', () => {
  it('Generates head meta', () => {
    const html = '<html/>'
    const output = metaBuilder(html, meta)
    expect(output).toBeDefined()
  })
  it('Adds OG & Twitter data', () => {
    const html = `
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <link rel="icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta name="description" content="Own your piece of XYO's Decentralized Digital World!" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/manifest.json" />
  <title>XYO 2.0</title>
  <link href="https://fonts.googleapis.com/css?family=Nunito+Sans|Lexend+Deca|Rock+Salt|Source+Code+Pro&display=swap"
    rel="stylesheet">
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-795QBPW744"></script>
  <script>function gtag() { dataLayer.push(arguments) } window.dataLayer = window.dataLayer || [], gtag("js", new Date), gtag("config", "G-795QBPW744")</script>
  <style>
    html {
      overflow-y: auto;
      overflow-x: hidden
    }

    #root,
    body {
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0
    }
  </style>
  <script defer="defer" src="/static/js/main.ae7f7033.js"></script>
  <link href="/static/css/main.026e3fe6.css" rel="stylesheet">
</head>

<body style="padding:0;margin:0;overflow-x:hidden"><noscript><iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-W2TFNXL" height="0" width="0"
      style="display:none;visibility:hidden"></iframe></noscript><noscript>You need to enable JavaScript to run this
    app.</noscript>
  <div id="root"></div>
</body>

</html>
    `
    const output = metaBuilder(html, meta)
    expect(output).toContain(meta.description)
    expect(output).toContain(`<title>${meta.title}</title>`)
    const metaProperties = createMetaPropertiesDict(meta)
    Object.entries(metaProperties).forEach(([property, content]) => {
      expect(output).toContain(`<meta property="${property}" content="${content}">`)
    })
    expect(output).toMatchSnapshot()
  })
  it('Overwrites the existing values with the new value', () => {
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
      og: {
        image: newImage,
      },
      twitter: {
        image: {
          '': newImage,
        },
      },
    }
    const properties = ['og:image', 'twitter:image']
    properties.forEach((property) => {
      expect(html).toContain(`<meta property="${property}" content="${oldImage}">`)
    })
    const output = metaBuilder(html, meta)
    properties.forEach((property) => {
      expect(output).not.toContain(`<meta property="${property}" content="${oldImage}">`)
      expect(output).toContain(`<meta property="${property}" content="${newImage}">`)
    })
    expect(output).toMatchSnapshot()
  })
})
