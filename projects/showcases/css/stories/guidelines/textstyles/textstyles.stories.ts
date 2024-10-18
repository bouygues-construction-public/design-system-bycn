import type { Meta, StoryObj } from '@storybook/angular';
import textstyle from './examples/textstyle.component';

const meta: Meta<textstyle> = {
  title: 'Guidelines / Textstyle',
  component: textstyle,
  render: (args: textstyle) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<textstyle>;

export const Overview: Story = {
  args: {
    text: [
      {
        token: '--mas-semantic-typography-all-screen-body1',
        data: 'Typography helps us create hierarchies, organize information, and guide our users through pages.',
      },
      {
        token: '--mas-semantic-typography-desktop-headline3',
        data: 'Example with CSS utility classes:',
      },
      {
        token: '--mas-semantic-typography-all-screen-body2',
        data: 'Without CSS utility classes, we have a simple text.',
      },
      {
        token: '--mas-semantic-typography-all-screen-body4-bold',
        data: 'With CSS utility classes from Tailwind CSS for a global paragraph.',
      },
      {
        token: '--mas-semantic-typography-all-screen-caption-regular',
        data: 'CAPTION',
      },
    ],
  },
};

export const Mobile: Story = {
  args: {
    text: [
      { token: '--mas-semantic-typography-mobile-display1', data: 'Mobile - Display 1' },
      { token: '--mas-semantic-typography-mobile-display2', data: 'Mobile - Display 2' },
      { token: '--mas-semantic-typography-mobile-display3', data: 'Mobile - Display 3' },
      { token: '--mas-semantic-typography-mobile-headline1', data: 'Mobile - Title 1' },
      { token: '--mas-semantic-typography-mobile-headline2', data: 'Mobile - Title 2' },
      { token: '--mas-semantic-typography-mobile-headline3', data: 'Mobile - Title 3' },
    ],
  },
};

export const Tablet: Story = {
  args: {
    text: [
      { token: '--mas-semantic-typography-tablet-display1', data: 'Tablet - Display 1' },
      { token: '--mas-semantic-typography-tablet-display2', data: 'Tablet - Display 2' },
      { token: '--mas-semantic-typography-tablet-display3', data: 'Tablet - Display 3' },
      { token: '--mas-semantic-typography-tablet-headline1', data: 'Tablet - Title 1' },
      { token: '--mas-semantic-typography-tablet-headline2', data: 'Tablet - Title 2' },
      { token: '--mas-semantic-typography-tablet-headline3', data: 'Tablet - Title 3' },
    ],
  },
};

export const Desktop: Story = {
  args: {
    text: [
      { token: '--mas-semantic-typography-desktop-display1', data: 'Desktop - Display 1' },
      { token: '--mas-semantic-typography-desktop-display2', data: 'Desktop - Display 2' },
      { token: '--mas-semantic-typography-desktop-display3', data: 'Desktop - Display 3' },
      { token: '--mas-semantic-typography-desktop-headline1', data: 'Desktop - Title 1' },
      { token: '--mas-semantic-typography-desktop-headline2', data: 'Desktop - Title 2' },
      { token: '--mas-semantic-typography-desktop-headline3', data: 'Desktop - Title 3' },
    ],
  },
};

export const Subtitles: Story = {
  args: {
    text: [
      { token: '--mas-semantic-typography-all-screen-subtitle1', data: 'All screen - Subtitle 1' },
      { token: '--mas-semantic-typography-all-screen-subtitle2', data: 'All screen - Subtitle 2' },
      { token: '--mas-semantic-typography-all-screen-subtitle3', data: 'All screen - Subtitle 3' },
    ],
  },
};
export const Body: Story = {
  args: {
    text: [
      { token: '--mas-semantic-typography-all-screen-body1', data: 'All screen - Body text 1' },
      { token: '--mas-semantic-typography-all-screen-body2', data: 'All screen - Body text 2' },
      { token: '--mas-semantic-typography-all-screen-body3', data: 'All screen - Body text 3' },
      { token: '--mas-semantic-typography-all-screen-body4', data: 'All screen - Body text 4' },
      { token: '--mas-semantic-typography-all-screen-body1-bold', data: 'All screen - Body text 1 - bold' },
      { token: '--mas-semantic-typography-all-screen-body2-bold', data: 'All screen - Body text 2 - bold' },
      { token: '--mas-semantic-typography-all-screen-body3-bold', data: 'All screen - Body text 3 - bold' },
      { token: '--mas-semantic-typography-all-screen-body4-bold', data: 'All screen - Body text 4 - bold' },
    ],
  },
};

export const Captions: Story = {
  args: {
    text: [
      { token: '--mas-semantic-typography-all-screen-caption-regular', data: 'All screen - Caption text' },
      { token: '--mas-semantic-typography-all-screen-caption-semi-bold', data: 'All screen - Caption text - Semi bold' }
    ],
  },
};

export const Overline: Story = {
  args: {
    text: [
      { token: '--mas-semantic-typography-all-screen-overline-uppercase', data: 'All screen - overline text - uppercase' },
      { token: '--mas-semantic-typography-all-screen-overline-as-typed', data: 'All screen - overline text - as typed' }
    ],
  },
};
