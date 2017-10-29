const path = require('path')

const isDev = process.argv.indexOf('-p') === -1

module.exports = {
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    publicPath: ''
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve('./src')
    ]
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve('./src'),
        use: ['babel-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        include: path.resolve('./src/assets'),
        use: [{
          loader:'file-loader',
          options: isDev ? {
            // use full path in development for better readability
            name: '[path][name].[ext]'
          } : {
            outputPath: 'assets/'
          }
        }]
      },
      {
        test: /\.(scss|sass)$/,
        include: path.resolve('./src'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[name]_[local]_[hash:base64:3]',
              modules: true,
              importLoaders: 1
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve('./src/styles')],
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
}