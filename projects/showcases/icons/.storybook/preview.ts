import type { Preview } from '@storybook/angular';
import '@masoni/icons/dist/font/filled/arrows/arrows.css';
// import '@masoni/icons/dist/font/outlined/index.css';
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
