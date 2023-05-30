module.exports = {
    plugins: {
      'postcss-import': {},
      tailwindcss: {
        config: './tailwind.config.js'
      },
      autoprefixer: {},
      'postcss-discard-comments': {},
      'postcss-combine-duplicated-selectors': {},
      'postcss-prettify': {}
    },
};
