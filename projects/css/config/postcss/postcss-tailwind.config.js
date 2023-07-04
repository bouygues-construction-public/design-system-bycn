const tailwindcss =  {
    config: './tailwind.config.js'
  }
const coreConfig = require('./postcss.config')
  module.exports = {
    Plugin: [...coreConfig.plugins, tailwindcss]
  }