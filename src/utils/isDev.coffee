env = process.env.NODE_ENV

isDev =
  env == 'dev' ||
  env == 'development' ||
  env == undefined

export default isDev
