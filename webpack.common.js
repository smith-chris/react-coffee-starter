const path = require('path')

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
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(scss|sass)$/,
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
        ],
        include: path.resolve('./src')
      }
    ]
  }
}