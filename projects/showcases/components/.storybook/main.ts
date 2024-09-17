import type { StorybookConfig } from '@storybook/angular';
const config: StorybookConfig = {
  stories: [
     '../stories/overview.stories.mdx',
     '../stories/**/*.@(ts|tsx|mdx)',
    '../stories/**/*.stories.@(ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-interactions',
    '@storybook/addon-actions',
    {
      name: '@storybook/addon-styling',
      options: {
        cssModules: true,
      },
    },
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false, // Disable comment extraction for actions addon
      },
    },
  ],
  staticDirs: ['../../static'],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
export default config;
