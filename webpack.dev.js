const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  NamedModulesPlugin,
  HotModuleReplacementPlugin
} = require('webpack')

module.exports = merge(common, {
  entry: [
    'react-hot-loader/patch',
    './src/index.dev.js'
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      inject: 'body'
    }),
    new NamedModulesPlugin(),
    new HotModuleReplacementPlugin()
  ]
})