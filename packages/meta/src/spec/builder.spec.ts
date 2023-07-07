import { metaBuilder } from '../builder'
import { Meta } from '../models'

const meta: Meta = {
  description: 'Updated description',
  og: {
    // audio: {
    //   alt: 'og.audio.alt',
    //   height: 111,
    //   secure_url: 'https://og.com/audio',
    //   type: 'og.audio.type',
    //   url: 'http://og.com/audio',
    //   width: 222,
    // },
    description: '',
    determiner: '',
    image: 'https://example.com/image.jpg',
    locale: '',
    site_name: '',
    title: 'Example Open Graph Meta',
    type: 'website',
    url: 'https://example.com',
    // video: {
    //   alt: 'og.video.alt',
    //   height: 333,
    //   secure_url: 'https://og.com/video',
    //   type: 'og.video.type',
    //   url: 'http://og.com/video',
    //   width: 444,
    // },
  },
  title: 'Updated title',
  twitter: {
    app: {
      id: {
        googleplay: 'twitter.app.id.googleplay',
        ipad: 'twitter.app.id.ipad',
        iphone: 'twitter.app.id.iphone',
      },
      name: {
        googleplay: 'twitter.app.name.googleplay',
        ipad: 'twitter.app.name.ipad',
        iphone: 'twitter.app.name.iphone',
      },
      url: {
        googleplay: 'https://www.twitter.com/url/googleplay',
        ipad: 'https://www.twitter.com/url/ipad',
        iphone: 'https://www.twitter.com/url/iphone',
      },
    },
    card: 'summary',
    creator: {
      id: 'twitter.creator.id',
      username: 'twitter.creator.username',
    },
    description: 'description',
    image: {
      alt: 'alt',
      url: 'https://www.twitter.com/image/url',
    },
    // player: {
    //   alt: '',
    //   height: 555,
    //   stream: '',
    //   url: '',
    //   width: 666,
    // },
    site: {
      id: 'twitter.site.id',
      username: 'twitter.site.username',
    },
    title: 'twitter.title',
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
    expect(output).toMatchInlineSnapshot(`
      "<!DOCTYPE html><html lang="en"><head>
        <meta charset="utf-8">
        <link rel="icon" href="/favicon.ico">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta name="theme-color" content="#000000">
        <meta name="description" content="Own your piece of XYO's Decentralized Digital World!">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">
        <link rel="manifest" href="/manifest.json">
        <title>Updated title</title>
        <link href="https://fonts.googleapis.com/css?family=Nunito+Sans|Lexend+Deca|Rock+Salt|Source+Code+Pro&amp;display=swap" rel="stylesheet">
        <script async="" src="https://www.googletagmanager.com/gtag/js?id=G-795QBPW744"></script>
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
      <meta property="og:description" content=""><meta property="og:determiner" content=""><meta property="og:image" content="https://example.com/image.jpg"><meta property="og:locale" content=""><meta property="og:site_name" content=""><meta property="og:title" content="Example Open Graph Meta"><meta property="og:type" content="website"><meta property="og:url" content="https://example.com"><meta property="twitter:app:id:googleplay" content="twitter.app.id.googleplay"><meta property="twitter:app:id:ipad" content="twitter.app.id.ipad"><meta property="twitter:app:id:iphone" content="twitter.app.id.iphone"><meta property="twitter:app:name:googleplay" content="twitter.app.name.googleplay"><meta property="twitter:app:name:ipad" content="twitter.app.name.ipad"><meta property="twitter:app:name:iphone" content="twitter.app.name.iphone"><meta property="twitter:app:googleplay" content="https://www.twitter.com/url/googleplay"><meta property="twitter:app:ipad" content="https://www.twitter.com/url/ipad"><meta property="twitter:app:iphone" content="https://www.twitter.com/url/iphone"><meta property="twitter:card" content="summary"><meta property="twitter:creator:id" content="twitter.creator.id"><meta property="twitter:creator:username" content="twitter.creator.username"><meta property="twitter:description" content="description"><meta property="twitter:image:alt" content="alt"><meta property="twitter:image" content="https://www.twitter.com/image/url"><meta property="twitter:site:id" content="twitter.site.id"><meta property="twitter:site:username" content="twitter.site.username"><meta property="twitter:title" content="twitter.title"><meta property="description" content="Updated description"><meta property="title" content="Updated title"></head>

      <body style="padding:0;margin:0;overflow-x:hidden"><noscript><iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W2TFNXL" height="0" width="0"
            style="display:none;visibility:hidden"></iframe></noscript><noscript>You need to enable JavaScript to run this
          app.</noscript>
        <div id="root"></div>



          </body></html>"
    `)
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
          url: newImage,
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
  })
})
