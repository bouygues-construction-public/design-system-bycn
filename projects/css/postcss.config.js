module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    autoprefixer: {},
    tailwindcss: {
      config: './tailwind.config.js',
    },
    'postcss-discard-comments': {},
    'postcss-combine-duplicated-selectors': {},
    'postcss-sort-media-queries': {},
    'postcss-discard-duplicates': {},
    'postcss-prettify': {},
    'postcss-encode-background-svgs': {},
  },
};
