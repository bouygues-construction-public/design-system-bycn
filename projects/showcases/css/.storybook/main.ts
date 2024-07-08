import { dirname, join } from "path";
import type { StorybookConfig } from '@storybook/angular';
const config: StorybookConfig = {
  stories: ['../stories/guidelines/**/*.@(mdx|stories.@(ts|tsx))', '../stories/overview/*.stories.@(mdx)', '../stories/components/**/*.@(mdx|stories.@(ts))', '../stories/components/**/*.@(mdx)'],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    {
      name: '@storybook/addon-styling',
      options: {
        cssModules: true,
      },
    },
    getAbsolutePath("@storybook/addon-mdx-gfm"),
    '@chromatic-com/storybook'
  ],
  staticDirs: ['../../static'],
  framework: {
    name: getAbsolutePath("@storybook/angular"),
    options: {},
  },
  docs: {},
};
export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
