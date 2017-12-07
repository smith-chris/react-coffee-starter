const {helpers, compile} = require('coffeescript')

exports.process = (source, file) => {
  let transpile
  if (!helpers.isCoffee(file)) {
    return source
  }
  if (helpers.isLiterate(file)) {
    source = helpers.invertLiterate(source)
  }
  transpile = {
    plugins: 'transform-es2015-modules-commonjs',
    presets: ['react', 'jest']
  }
  return compile(source, {
    bare: true,
    inlineMap: true,
    transpile
  })
}
