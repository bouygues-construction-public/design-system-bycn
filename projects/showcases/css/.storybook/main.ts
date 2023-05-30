import type { StorybookConfig } from '@storybook/angular';
const config: StorybookConfig = {
  stories: ['../stories/guidelines/**/*.stories.@(ts|tsx|mdx)', '../stories/overview/*.stories.@(mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        cssModules: true,
      },
    },
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
