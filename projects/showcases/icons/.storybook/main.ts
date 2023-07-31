import type { StorybookConfig } from '@storybook/angular';
const config: StorybookConfig = {
  stories: ['../**/*.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
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
};
export default config;
