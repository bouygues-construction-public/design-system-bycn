import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MasNavigationBarModule, MasNavigationBar } from 'projects/components/src/public-api';

const meta: Meta<MasNavigationBar> = {
  component: MasNavigationBar,
  title: 'Components/Navigation/Navigation Bar',
  // tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasNavigationBarModule],
    }),
  ],
  parameters: {
    componentSubtitle: '',
    docs: {
      description: {
        component: ``,
      },
    },
  },
  render: (args: MasNavigationBar) => ({
    props: {
      ...args,
    },
    template: `
    `,
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<MasNavigationBar>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Basic: Story = {
  args: {},
};
export const Overview: Story = {
  render: (args: MasNavigationBar) => ({
    template: ``,
  }),
};
