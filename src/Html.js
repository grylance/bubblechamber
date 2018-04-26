export default (body, styles) => `
  <!DOCTYPE html>
  <head>
    <title>BUBBLE CHAMBER</title>
    <meta name="viewport" content="width=device-width" />
    <link href='base.css' rel='stylesheet' />
    ${styles}
  </head>
  <body>
    <div id='app'>${body}</div>
    <script src='main.js#${Date.now()}'></script>
  </body>
`
