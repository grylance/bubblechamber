export default (body, styles) => `
  <!DOCTYPE html>
  <head>
    <title>BUBBLE CHAMBER</title>
    <link rel="apple-touch-icon" href="/touch-icon.png">
    <link rel="icon" href="/favicon.png">
    <meta property="og:image" content="/og-image.jpg" />
    <meta name="viewport" content="width=device-width" />
    <link href='base.css' rel='stylesheet' />
    ${styles}
  </head>
  <body>
    <div id='app'>${body}</div>
    <script src='main.js#${Date.now()}'></script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-118973477-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-118973477-1');
    </script>
  </body>
`
