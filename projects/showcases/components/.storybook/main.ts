import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../**/*.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
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
  // webpackFinal: async (config) => {
  //   return {
  //     ...config,
  //     module: { ...config.module, rules: [...config?.module?.rules, ...custom.module.rules] },
  //   };
  // },
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
