const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  'extends': 'standard',

  'env': {
    'es6': true,
    'browser': true,
    'commonjs': true
  },

  'plugins': [
    'react'
  ],

  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    }
  },

  'rules': {
    'react/jsx-uses-react': ERROR,
    'react/jsx-uses-vars': ERROR,
    'brace-style': [
      'error',
      'stroustrup',
      { 'allowSingleLine': true }
    ]
  }
}