module.exports = {
    plugins: {
      'postcss-import': {},
      autoprefixer: {},
      tailwindcss: {
        config: './tailwind.config.js'
      },
      'postcss-discard-comments': {},
      'postcss-combine-duplicated-selectors': {},
      'postcss-prettify': {},
      'postcss-encode-background-svgs': {}
    },
};
