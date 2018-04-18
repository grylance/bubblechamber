const express = require('express')
const path = require('path')
const app = express()

const isDeveloping = process.env.NODE_ENV !== 'production'
const port = isDeveloping ? 2000 : process.env.PORT

app.use('/dist', express.static(path.join(__dirname, '/dist')))

const cacheBuster = Date.now()

app.get('/*', (req, res) => {
  res.send(
    `
      <!DOCTYPE html>
      <head>
        <title>BUBBLE CHAMBER</title>
        <link href='dist/base.css' rel='stylesheet' />
      </head>
      <body>
        <div id='app'></div>
        <script src='dist/main.js#${cacheBuster}'></script>
      </body>
    `
  )
})

app.listen(port, '0.0.0.0', error => {
  if (error) console.log(error)
  console.info('Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
})
