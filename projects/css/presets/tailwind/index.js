const theme = require('./theme') ;
module.exports = {
  prefix: 'mas-',
  theme: theme,
  variants: {
    extend: {
      cursor: ['disabled', 'hover'],
      opacity: ['disabled', 'hover', 'active'],
      backgroundColor: ['active'],
    },
  },
  plugins: []
};
