const {resolve} = require('./webpack.common.js')

module.exports = {
  moduleDirectories: resolve.modules,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/utils/mock.js',
    '\\.(css|sass|scss)$': 'identity-obj-proxy'
  },
  moduleFileExtensions: [
    'js',
    'json',
    'coffee',
    'litcoffee',
    'coffee.md'
  ],
  testRegex: '\\.(spec|test)\\.(coffee|litcoffee|coffee\\.md)',
  transform: {'^.+\\.coffee$': '<rootDir>/src/utils/jestTransform.js'}
}
