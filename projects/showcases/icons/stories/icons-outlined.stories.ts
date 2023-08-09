import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MasIconExamples } from './mas-icon-examples.component';
import arrows from '@masoni/icons/dist/generated/outlined/arrows/arrows.json';
import brands from '@masoni/icons/dist/generated/outlined/brands/brands.json';
import commerce from '@masoni/icons/dist/generated/outlined/commerce/commerce.json';
import communication from '@masoni/icons/dist/generated/outlined/communication/communication.json';
import design from '@masoni/icons/dist/generated/outlined/design/design.json';
import development from '@masoni/icons/dist/generated/outlined/development/development.json';
import education from '@masoni/icons/dist/generated/outlined/education/education.json';
import games from '@masoni/icons/dist/generated/outlined/games/games.json';
import healthAndWellness from '@masoni/icons/dist/generated/outlined/health-and-wellness/health-and-wellness.json';
import mapsAndTravel from '@masoni/icons/dist/generated/outlined/maps-and-travel/maps-and-travel.json';
import mathAndFinance from '@masoni/icons/dist/generated/outlined/math-and-finance/math-and-finance.json';
import media from '@masoni/icons/dist/generated/outlined/media/media.json';
import officeAndEditing from '@masoni/icons/dist/generated/outlined/office-and-editing/office-and-editing.json';
import people from '@masoni/icons/dist/generated/outlined/people/people.json';
import securityAndWarnings from '@masoni/icons/dist/generated/outlined/security-and-warnings/security-and-warnings.json';
import systemAndDevice from '@masoni/icons/dist/generated/outlined/system-and-device/system-and-device.json';
import time from '@masoni/icons/dist/generated/outlined/time/time.json';
import weatherAndNature from '@masoni/icons/dist/generated/outlined/weather-and-nature/weather-and-nature.json';

const meta: Meta<MasIconExamples> = {
  component: MasIconExamples,
  title: 'Icons/ Outlined',
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ExsmUk2kX4zyyYvfmmCEiy/BYCN-Icons?type=design&node-id=91-29248'
    }
  },
  args: {
    iconClasses: [...Object.keys(arrows).map((icon) => `mas-${icon} mas-arrows--outlined`)],
  },
};

export const Brands: Story = {
  args: {
    iconClasses: [...Object.keys(brands).map((icon) => `mas-${icon} mas-brands--outlined`)],
  },
};
export const Commerce: Story = {
  args: {
    iconClasses: [...Object.keys(commerce).map((icon) => `mas-${icon} mas-commerce--outlined`)],
  },
};
export const Communication: Story = {
  args: {
    iconClasses: [...Object.keys(communication).map((icon) => `mas-${icon} mas-communication--outlined`)],
  },
};
export const Design: Story = {
  args: {
    iconClasses: [...Object.keys(design).map((icon) => `mas-${icon} mas-design--outlined`)],
  },
};
export const Development: Story = {
  args: {
    iconClasses: [...Object.keys(development).map((icon) => `mas-${icon} mas-development--outlined`)],
  },
};
export const Education: Story = {
  args: {
    iconClasses: [...Object.keys(education).map((icon) => `mas-${icon} mas-education--outlined`)],
  },
};
export const Games: Story = {
  args: {
    iconClasses: [...Object.keys(games).map((icon) => `mas-${icon} mas-games--outlined`)],
  },
};
export const HealthAndWellness: Story = {
  args: {
    iconClasses: [...Object.keys(healthAndWellness).map((icon) => `mas-${icon} mas-health-and-wellness--outlined`)],
  },
};
export const MapsAndTravel: Story = {
  args: {
    iconClasses: [...Object.keys(mapsAndTravel).map((icon) => `mas-${icon} mas-maps-and-travel--outlined`)],
  },
};
export const MathAndFinance: Story = {
  args: {
    iconClasses: [...Object.keys(mathAndFinance).map((icon) => `mas-${icon} mas-math-and-finance--outlined`)],
  },
};
export const Media: Story = {
  args: {
    iconClasses: [...Object.keys(media).map((icon) => `mas-${icon} mas-media--outlined`)],
  },
};
export const OfficeAndEditing: Story = {
  args: {
    iconClasses: [...Object.keys(officeAndEditing).map((icon) => `mas-${icon} mas-office-and-editing--outlined`)],
  },
};
export const People: Story = {
  args: {
    iconClasses: [...Object.keys(people).map((icon) => `mas-${icon} mas-people--outlined`)],
  },
};
export const SecurityAndWarnings: Story = {
  args: {
    iconClasses: [...Object.keys(securityAndWarnings).map((icon) => `mas-${icon} mas-security-and-warnings--outlined`)],
  },
};
export const SystemAndDevice: Story = {
  args: {
    iconClasses: [...Object.keys(systemAndDevice).map((icon) => `mas-${icon} mas-system-and-device--outlined`)],
  },
};
export const Time: Story = {
  args: {
    iconClasses: [...Object.keys(time).map((icon) => `mas-${icon} mas-time--outlined`)],
  },
};
export const WeatherAndNature: Story = {
  args: {
    iconClasses: [...Object.keys(weatherAndNature).map((icon) => `mas-${icon} mas-weather-and-nature--outlined`)],
  },
};
