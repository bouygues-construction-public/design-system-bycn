import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
     '../stories/overview.stories.mdx',
     '../stories/**/*.@(ts|tsx|mdx)',
    '../stories/**/*.stories.@(ts|tsx|mdx)',
    '../stories/**/reactive-form/*.stories.ts',
  ],
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
  staticDirs: ['../../static'],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
};
export default config;
