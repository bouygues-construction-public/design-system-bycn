import type { Preview } from '@storybook/angular';
// import '@masoni/icons/dist/font/filled/arrows/arrows.css';
// import '@masoni/icons/dist/font/filled/brands/brands.css';
// import '@masoni/icons/dist/font/filled/commerce/commerce.css';
// import '@masoni/icons/dist/font/filled/communication/communication.css';
// import '@masoni/icons/dist/font/filled/design/design.css';
// import '@masoni/icons/dist/font/filled/development/development.css';
// import '@masoni/icons/dist/font/filled/education/education.css';
// import '@masoni/icons/dist/font/filled/games/games.css';
// import '@masoni/icons/dist/font/filled/health-and-wellness/health-and-wellness.css';
// import '@masoni/icons/dist/font/filled/maps-and-travel/maps-and-travel.css';
// import '@masoni/icons/dist/font/filled/math-and-finance/math-and-finance.css';
// import '@masoni/icons/dist/font/filled/media/media.css';
// import '@masoni/icons/dist/font/filled/office-and-editing/office-and-editing.css';
// import '@masoni/icons/dist/font/filled/people/people.css';
// import '@masoni/icons/dist/font/filled/security-and-warnings/security-and-warnings.css';
// import '@masoni/icons/dist/font/filled/system-and-device/system-and-device.css';
// import '@masoni/icons/dist/font/filled/time/time.css';
// import '@masoni/icons/dist/font/filled/weather-and-nature/weather-and-nature.css';
import '@masoni/icons/dist/font/filled/index.css'
import '@masoni/icons/dist/font/outlined/index.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
