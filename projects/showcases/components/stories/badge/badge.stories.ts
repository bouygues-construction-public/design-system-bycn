import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MasBadgeModule, MasBadge } from 'projects/components/src/public-api';

const meta: Meta<MasBadge> = {
  component: MasBadge,
  title: 'Components/Indicator/Badge',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasBadgeModule],
    }),
  ],
  parameters: {
  },
  render: (args: MasBadge) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
    size: {
      type: { name: 'string', required: false },
      control: 'radio',
      options: ['S', 'M', 'L'],
      description: "The size of the badge. Availabel options: 'S', 'M', 'L'. Default: 'M'",
    },
  },
};

export default meta;
type Story = StoryObj<MasBadge>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Overview: Story = {
  args: {
    size: 'M',
    number: 10,
    type: 'number'
  },
};