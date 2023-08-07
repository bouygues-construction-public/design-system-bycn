import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MasIconExamples } from './mas-icon-examples.component';
import arrows from '@masoni/icons/dist/font/filled/arrows/arrows.json';
import brands from '@masoni/icons/dist/font/filled/brands/brands.json';
import commerce from '@masoni/icons/dist/font/filled/commerce/commerce.json';
import communication from '@masoni/icons/dist/font/filled/communication/communication.json';
import design from '@masoni/icons/dist/font/filled/design/design.json';
import development from '@masoni/icons/dist/font/filled/development/development.json';
import education from '@masoni/icons/dist/font/filled/education/education.json';
import games from '@masoni/icons/dist/font/filled/games/games.json';
import healthAndWellness from '@masoni/icons/dist/font/filled/health-and-wellness/health-and-wellness.json';
import mapsAndTravel from '@masoni/icons/dist/font/filled/maps-and-travel/maps-and-travel.json';
import mathAndFinance from '@masoni/icons/dist/font/filled/math-and-finance/math-and-finance.json';
import media from '@masoni/icons/dist/font/filled/media/media.json';
import officeAndEditing from '@masoni/icons/dist/font/filled/office-and-editing/office-and-editing.json';
import people from '@masoni/icons/dist/font/filled/people/people.json';
import securityAndWarnings from '@masoni/icons/dist/font/filled/security-and-warnings/security-and-warnings.json';
import systemAndDevice from '@masoni/icons/dist/font/filled/system-and-device/system-and-device.json';
import time from '@masoni/icons/dist/font/filled/time/time.json';
import weatherAndNature from '@masoni/icons/dist/font/filled/weather-and-nature/weather-and-nature.json';

const meta: Meta<MasIconExamples> = {
  component: MasIconExamples,
  title: 'Icons/ Filled',
  decorators: [
    moduleMetadata({
      declarations: [MasIconExamples],
      imports: [CommonModule],
    }),
  ],
  render: (args: MasIconExamples) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<MasIconExamples>;

export const Arrows: Story = {
  args: {
    iconClasses: [...Object.keys(arrows).map((icon) => `mas-${icon} mas-arrows--filled`)],
  },
};

export const Brands: Story = {
  args: {
    iconClasses: [...Object.keys(brands).map((icon) => `mas-${icon} mas-brands--filled`)],
  },
};
export const Commerce: Story = {
  args: {
    iconClasses: [...Object.keys(commerce).map((icon) => `mas-${icon} mas-commerce--filled`)],
  },
};
export const Communication: Story = {
  args: {
    iconClasses: [...Object.keys(communication).map((icon) => `mas-${icon} mas-communication--filled`)],
  },
};
export const Design: Story = {
  args: {
    iconClasses: [...Object.keys(design).map((icon) => `mas-${icon} mas-design--filled`)],
  },
};
export const Development: Story = {
  args: {
    iconClasses: [...Object.keys(development).map((icon) => `mas-${icon} mas-development--filled`)],
  },
};
export const Education: Story = {
  args: {
    iconClasses: [...Object.keys(education).map((icon) => `mas-${icon} mas-education--filled`)],
  },
};
export const Games: Story = {
  args: {
    iconClasses: [...Object.keys(games).map((icon) => `mas-${icon} mas-games--filled`)],
  },
};
export const HealthAndWellness: Story = {
  args: {
    iconClasses: [...Object.keys(healthAndWellness).map((icon) => `mas-${icon} mas-health-and-wellness--filled`)],
  },
};
export const MapsAndTravel: Story = {
  args: {
    iconClasses: [...Object.keys(mapsAndTravel).map((icon) => `mas-${icon} mas-maps-and-travel--filled`)],
  },
};
export const MathAndFinance: Story = {
  args: {
    iconClasses: [...Object.keys(mathAndFinance).map((icon) => `mas-${icon} mas-math-and-finance--filled`)],
  },
};
export const Media: Story = {
  args: {
    iconClasses: [...Object.keys(media).map((icon) => `mas-${icon} mas-media--filled`)],
  },
};
export const OfficeAndEditing: Story = {
  args: {
    iconClasses: [...Object.keys(officeAndEditing).map((icon) => `mas-${icon} mas-office-and-editing--filled`)],
  },
};
export const People: Story = {
  args: {
    iconClasses: [...Object.keys(people).map((icon) => `mas-${icon}`)],
  },
};
export const SecurityAndWarnings: Story = {
  args: {
    iconClasses: [...Object.keys(securityAndWarnings).map((icon) => `mas-${icon}`)],
  },
};
export const SystemAndDevice: Story = {
  args: {
    iconClasses: [...Object.keys(systemAndDevice).map((icon) => `mas-${icon}`)],
  },
};
export const Time: Story = {
  args: {
    iconClasses: [...Object.keys(time).map((icon) => `mas-${icon}`)],
  },
};
export const WeatherAndNature: Story = {
  args: {
    iconClasses: [...Object.keys(weatherAndNature).map((icon) => `mas-${icon}`)],
  },
};
