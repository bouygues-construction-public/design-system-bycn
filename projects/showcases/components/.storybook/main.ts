import type { StorybookConfig } from '@storybook/angular';
<<<<<<< HEAD
const config: StorybookConfig = {
  stories: [
     '../stories/overview.stories.mdx',
    '../stories/**/*.stories.@(ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-interactions',
    '@storybook/addon-actions',
=======

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(ts|tsx)', '../stories/overview.stories.mdx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
>>>>>>> e816b52 (toggle init)
    {
      name: '@storybook/addon-styling',
      options: {
        cssModules: true,
      },
    },
<<<<<<< HEAD
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false, // Disable comment extraction for actions addon
      },
    },
=======
>>>>>>> e816b52 (toggle init)
  ],
  staticDirs: ['../../static'],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
