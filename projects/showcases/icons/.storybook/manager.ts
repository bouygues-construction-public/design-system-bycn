// .storybook/manager.js
import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import masIconsLogo from '../../static/assets/favicon.svg'

addons.setConfig({
    panelPosition: 'right',
    theme: {
      ...themes.normal,
      brandTitle: '@mas/icons',
      brandUrl: 'https://github.com/bouygues-construction/design-system-bycn',
      brandImage: masIconsLogo,
  
      colorPrimary: '#C74D10',
      colorSecondary: '#C74D1066',
  
      // UI
      appBg: 'white',
      appContentBg: '#F9F9FA',
      appBorderRadius: 4,
  
      // Typography
      fontBase: '"Roboto", Arial, Helvetica, sans-serif',
      fontCode: 'monospace',
    },
});