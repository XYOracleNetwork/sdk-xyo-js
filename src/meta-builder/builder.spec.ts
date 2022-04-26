import { metaBuilder } from './builder'
import { Meta } from './models'

const meta: Meta = {
  og: {
    image: 'https://example.com/image.jpg',
    title: 'Example Open Graph Meta',
    type: 'website',
    url: 'https://example.com',
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
    expect(output).toMatchInlineSnapshot(`
      "<!DOCTYPE html><html lang=\\"en\\"><head>
        <meta charset=\\"utf-8\\">
        <link rel=\\"icon\\" href=\\"/favicon.ico\\">
        <meta name=\\"viewport\\" content=\\"width=device-width,initial-scale=1\\">
        <meta name=\\"theme-color\\" content=\\"#000000\\">
        <meta name=\\"description\\" content=\\"Own your piece of XYO's Decentralized Digital World!\\">
        <link rel=\\"apple-touch-icon\\" href=\\"/apple-touch-icon.png\\">
        <link rel=\\"manifest\\" href=\\"/manifest.json\\">
        <title>XYO 2.0</title>
        <link href=\\"https://fonts.googleapis.com/css?family=Nunito+Sans|Lexend+Deca|Rock+Salt|Source+Code+Pro&amp;display=swap\\" rel=\\"stylesheet\\">
        <script async=\\"\\" src=\\"https://www.googletagmanager.com/gtag/js?id=G-795QBPW744\\"></script>
        <script>function gtag() { dataLayer.push(arguments) } window.dataLayer = window.dataLayer || [], gtag(\\"js\\", new Date), gtag(\\"config\\", \\"G-795QBPW744\\")</script>
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
        <script defer=\\"defer\\" src=\\"/static/js/main.ae7f7033.js\\"></script>
        <link href=\\"/static/css/main.026e3fe6.css\\" rel=\\"stylesheet\\">
      <meta property=\\"og:image\\" content=\\"https://example.com/image.jpg\\"><meta property=\\"og:title\\" content=\\"Example Open Graph Meta\\"><meta property=\\"og:type\\" content=\\"website\\"><meta property=\\"og:url\\" content=\\"https://example.com\\"></head>

      <body style=\\"padding:0;margin:0;overflow-x:hidden\\"><noscript><iframe
            src=\\"https://www.googletagmanager.com/ns.html?id=GTM-W2TFNXL\\" height=\\"0\\" width=\\"0\\"
            style=\\"display:none;visibility:hidden\\"></iframe></noscript><noscript>You need to enable JavaScript to run this
          app.</noscript>
        <div id=\\"root\\"></div>



          </body></html>"
    `)
  })
})
