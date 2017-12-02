const path = require('path')

const isDev = process.argv.indexOf('-p') === -1
let removeNull = array => array.filter(e => e !== null)

module.exports = {
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    publicPath: ''
  },
  resolve: {
    extensions: [
      '.coffee',
      '.js',
      '.json',
      isDev ? '.dev.coffee' : '.prod.coffee',
      isDev ? '.dev.js' : '.prod.js',
    ],
    modules: ['node_modules', path.resolve('./src')]
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
        test: /\.coffee$/,
        include: path.resolve('./src'),
        use: ['babel-loader', 'coffee-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        include: path.resolve('./src/assets'),
        use: [
          {
            loader: 'file-loader',
            options: isDev
              ? {
                // use full path in development for better readability
                name: '[path][name].[ext]'
              }
              : {
                outputPath: 'assets/'
              }
          }
        ]
      },
      {
        test: /\.(css)$/,
        include: path.resolve('./src'),
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        include: path.resolve('./src'),
        use: removeNull([
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              localIdentName: isDev
                ? '[name]_[local]_[hash:base64:3]'
                : '[hash:base64:10]',
              modules: true,
              importLoaders: 1
            }
          },
          isDev ? null : 'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve('./src/styles')],
              sourceMap: isDev
            }
          }
        ])
      }
    ]
  }
}
