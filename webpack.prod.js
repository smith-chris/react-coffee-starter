const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const {UglifyJsPlugin} = require('webpack').optimize

module.exports = merge(common, {
  entry: './src/index.prod.js',
  devtool: 'nosources-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      inject: 'body'
    }),
    new UglifyJsPlugin({
      sourceMap: true,
      comments: false
    })
  ]
})