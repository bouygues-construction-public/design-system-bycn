// const tailwindcss = {
//   config: './tailwind.config.js',
// };
const tailwindcss = require('tailwindcss');
const coreConfig = require('./postcss.config');
plugins = [];
module.exports = {
  ...coreConfig.plugins, tailwindcss
};
