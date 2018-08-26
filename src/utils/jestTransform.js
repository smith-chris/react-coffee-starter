const { helpers, compile } = require('coffeescript')

exports.process = (source, file) => {
  if (!helpers.isCoffee(file)) {
    return source
  }
  if (helpers.isLiterate(file)) {
    source = helpers.invertLiterate(source)
  }
  return compile(source, {
    transpile: {
      plugins: 'transform-es2015-modules-commonjs',
      presets: ['react', 'jest']
    },
    bare: true,
    inlineMap: true
  })
}
