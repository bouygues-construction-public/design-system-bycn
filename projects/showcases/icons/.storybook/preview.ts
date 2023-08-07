import type { Preview } from '@storybook/angular';
// import '@masoni/icons/dist/font/mas-icons/mas-icons.css'
import '@masoni/icons/dist/font/filled/arrows/arrows.css'
import '@masoni/icons/dist/font/filled/brands/brands.css'
import '@masoni/icons/dist/css/filled/index.css'
// import '@masoni/icons/dist/css/filled/arrows.css'


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
