export default body => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>BUBBLE CHAMBER</title>
      <link href='dist/base.css' rel='stylesheet' />
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
      <script src='dist/main.js#${Date.now()}'></script>
    </body>
  </html>
`
