import React from 'react'
import {renderToStaticMarkup} from 'react-dom/server'
import Koa from 'koa'
import serve from 'koa-static'
import {ServerStyleSheet} from 'styled-components'

import Html from './src/Html'
import Application from './src/App'

const app = new Koa()

const isDeveloping = process.env.NODE_ENV !== 'production'

app.use(serve('./dist'))

app.use(require('koa-static')(__dirname + '/public'))

app.use(async ctx => {
  if (ctx.path === '/') {
    const sheet = new ServerStyleSheet()
    const App = React.createElement(Application)
    const body = renderToStaticMarkup(sheet.collectStyles(App))
    const styles = sheet.getStyleTags();

    ctx.body = Html(body, styles)
  }
})

app.listen(isDeveloping ? 2000 : process.env.PORT)
