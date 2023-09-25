import type { StorybookConfig } from '@storybook/angular';
const config: StorybookConfig = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-styling',
      options: {
        cssModules: true,
      },
    },
    '@storybook/addon-designs', 
  ],
  staticDirs: ['../../static'],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
};
export default config;
