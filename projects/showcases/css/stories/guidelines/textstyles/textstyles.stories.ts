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
        class: 'mas-typo_body-1',
        data: 'Typography helps us create hierarchies, organize information, and guide our users through pages.',
      },
      {
        class: 'mas-typo_headline-3',
        data: 'Example with CSS utility classes:',
      },
      {
        class: 'mas-typo_body-2',
        data: 'Without CSS utility classes, we have a simple text.',
      },
      {
        class: 'mas-typo_body-2 mas-text-teal mas-font-bold',
        data: 'With CSS utility classes from Tailwind CSS for a global paragraph.',
      },
      {
        class: 'mas-typo_body-2 mas-icon-orange mas-bg-brand',
        data: 'HIGHLIGHT',
      },
    ],
  },
};
export const Displays: Story = {
  args: {
    text: [
      { class: 'mas-typo_display-1', data: 'Display 1' },
      { class: 'mas-typo_display-2', data: 'Display 2' },
      { class: 'mas-typo_display-3', data: 'Display 3' },
    ],
  },
};
export const Headines: Story = {
  args: {
    text: [
      { class: 'mas-typo_headline-1', data: 'Title 1' },
      { class: 'mas-typo_headline-2', data: 'Title 2' },
      { class: 'mas-typo_headline-3', data: 'Title 3' },
    ],
  },
};
export const Subtitles: Story = {
  args: {
    text: [
      { class: 'mas-typo_subtitle-1', data: 'Subtitle 1' },
      { class: 'mas-typo_subtitle-2', data: 'Subtitle 2' },
      { class: 'mas-typo_subtitle-3', data: 'Subtitle 3' },
    ],
  },
};
export const Body: Story = {
  args: {
    text: [
      { class: 'mas-typo_body-1', data: 'Text 1' },
      { class: 'mas-typo_body-2', data: 'Text 2' },
      { class: 'mas-typo_body-3', data: 'Text 3' },
      { class: 'mas-typo_body-1--bold', data: 'Text 1 - bold' },
      { class: 'mas-typo_body-2--bold', data: 'Text 2 - bold' },
      { class: 'mas-typo_body-3--bold', data: 'Text 3 - bold' },
    ],
  },
};

export const Captions: Story = {
  args: {
    text: [{ class: 'mas-typo_caption', data: 'Caption text' }],
  },
};

export const Overline: Story = {
  args: {
    text: [{ class: 'mas-typo_overline', data: 'overline text' }],
  },
};
