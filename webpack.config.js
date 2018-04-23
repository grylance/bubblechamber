const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = [
  {
    context: path.join(__dirname, 'src'),
    entry: [
      'babel-polyfill',
      './index.js',
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'main.js',
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',

          include: [
            path.resolve(__dirname, 'src'),
          ],

          test: /\.js$/,

          query: {
            plugins: ['transform-runtime'],
            presets: ['es2015', 'stage-0', 'react'],
          },
        },
        {
          test: /\.(svg|png|jpg|gif)(\?.+)?$/,
          exclude: /node_modules/,
          loader: 'url-loader?limit=25000',
        },
      ]
    },
    plugins: [
      new webpack.EnvironmentPlugin(['NODE_ENV']),
    ],
  },
  {
    target: 'node',
    context: __dirname,
    entry: [
      'babel-polyfill',
      './server.js',
    ],
    output: {
      path: __dirname,
      filename: './server-compiled.js',
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',

          include: [
            path.resolve(__dirname, 'src'),
          ],

          test: /\.js$/,

          query: {
            plugins: ['transform-runtime'],
            presets: ['es2015', 'stage-0', 'react'],
          },
        },
      ]
    },
    plugins: [
      new webpack.EnvironmentPlugin(['NODE_ENV']),
    ],
  },
]
