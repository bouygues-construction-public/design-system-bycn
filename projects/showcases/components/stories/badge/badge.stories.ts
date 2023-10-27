import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MasBadgeModule, MasBadge } from 'projects/components/src/public-api';

const meta: Meta<MasBadge> = {
  component: MasBadge,
  title: 'Components / Indicators / Badge',
  // tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasBadgeModule],
    }),
  ],
  parameters: {},
  render: (args: MasBadge) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
    number: {
      type: { name: 'number', required: false },
      description:
        'The minimum number is 1. The zero is not displayed. The maximum number is 99. Beyond 99, it is displayed 99+',
    },
    type: {
      type: { name: 'string', required: false },
      control: 'radio',
      options: ['dot', 'number'],
      description: '',
    },
    icon: { type: { name: 'string', required: false }, description: '' },
    size: {
      type: { name: 'string', required: false },
      control: 'radio',
      options: ['S', 'M', 'L'],
      description: "The size of the badge with icon. Availabel options: 'S', 'M', 'L'. Default: 'M'",
    },
    color: {
      type: { name: 'string', required: false },
      control: 'select',
      options: ['success', 'warning', 'alert', 'primary', 'brand'],
    },
  },
};

export default meta;
type Story = StoryObj<MasBadge>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Overview: Story = {
  args: {
    size: 'M',
    number: 1,
    type: 'number',
    color: 'primary',
    icon: 'mas-envelope-simple-outlined mas-communication--outlined',
  },
};

export const Color: Story = {
  render: (args: MasBadge) => ({
    template: `
      <mas-badge color="primary" icon="mas-design--outlined mas-circle-outlined"></mas-badge>
      <br>
      <mas-badge color="warning" icon="mas-design--outlined mas-circle-outlined"></mas-badge>
      <br>
      <mas-badge color="success" icon="mas-design--outlined mas-circle-outlined"></mas-badge>
      <br>
      <mas-badge color="alert" icon="mas-design--outlined mas-circle-outlined"></mas-badge>
      <br>
      <mas-badge color="brand" icon="mas-design--outlined mas-circle-outlined"></mas-badge>  
      `,
  }),
};
export const Number: Story = {
  render: (args: MasBadge) => ({
    template: `
      <mas-badge color="primary" [number]="0" type="number"></mas-badge>
      <br>
      <mas-badge color="primary" [number]="9" type="number"></mas-badge>
      <br>
      <mas-badge color="primary" [number]="100" type="number"></mas-badge>
      `,
  }),
};
export const WithIcon: Story = {
  render: (args: MasBadge) => ({
    template: `
      <mas-badge color="primary" [number]="0" type="number" icon="mas-user-outlined mas-people--outlined"></mas-badge>
      <br>
      <mas-badge color="primary" [number]="9" type="number" icon="mas-bookmark-simple-outlined mas-education--outlined"></mas-badge>
      <br>
      <mas-badge color="primary" [number]="100" type="number" icon="mas-chat-circle-dots-outlined mas-communication--outlined"></mas-badge>
      `,
  }),
};