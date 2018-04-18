const webpack = require('webpack')
const cssnano = require('cssnano')
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
        {
          test: /\.(woff)(\?.+)?$/,
          exclude: /node_modules/,
          loader: 'url-loader?limit=100000',
        },
        {
          test: /\.css$|\.less$/,
          exclude: /node_modules/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]',
              {
                loader: 'postcss-loader',
                options: {
                  paths: [
                    path.resolve(__dirname, 'node_modules'),
                  ],
                },
              },
              {
                loader: 'less-loader',
                options: {
                  paths: [
                    path.resolve(__dirname, 'node_modules'),
                  ],
                },
              },
            ],
          }),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin(process.env.NODE_ENV === 'production' ? 'main-[contentHash].css' : 'main.css', {
        allChunks: true,
      }),
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [
            cssnano({
              safe: true,
              autoprefixer: {
                add: true,
                browsers: 'last 2 versions',
              },
            }),
          ],
        },
      }),
      new webpack.EnvironmentPlugin(['NODE_ENV']),
    ],
  },
]
