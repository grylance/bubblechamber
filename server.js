import React from 'react'
import express from 'express'
import path from 'path'
import {renderToStaticMarkup} from 'react-dom/server'

import html from './src/Html'

import App from './src/App'

const exApp = express()
const isDeveloping = process.env.NODE_ENV !== 'production'
const port = isDeveloping ? 2000 : process.env.PORT

exApp.use('/dist', express.static(path.join(__dirname, '/dist')))

exApp.get('/', (req, res) => {
  res.send(
    html(
      renderToStaticMarkup(
        React.createElement(App)
      )
    )
  )
})

exApp.listen(port, '0.0.0.0', error => {
  if (error) console.log(error)
  console.info('Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
})
