import { Preview } from '@storybook/angular';
import '@masoni/css/dist/index.css';
import DocumentationTemplate from './DocumentationTemplate.mdx';
import '@masoni/icons/dist/css/filled/index.css'
import '@masoni/icons/dist/css/outlined/index.css'

const preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Overview', 'Guidelines', 'Components'],
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: true,
      page: DocumentationTemplate,
    },
  },
};

export default preview;
