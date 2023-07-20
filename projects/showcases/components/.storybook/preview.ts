import type { Preview } from '@storybook/angular';
import '@masoni/css/dist/index.css';

const preview: Preview = {
  parameters: {
<<<<<<< HEAD
    options: {
      storySort: {
        order: ['Overview', 'Guidelines', 'Components'],
      },
    },
=======
>>>>>>> e816b52 (toggle init)
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
