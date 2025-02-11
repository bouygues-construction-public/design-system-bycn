import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MasBadgeModule, MasBadge } from 'projects/components/src/public-api';

const meta: Meta<MasBadge> = {
  component: MasBadge,
  title: 'Components / Indicators / Badge',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasBadgeModule],
    }),
  ],
  parameters: {},
  render: ({...args}) => ({
    props: args
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
    size: {
      type: { name: 'string', required: false },
      control: 'radio',
      options: ['small', 'large'],
      description: "The size of the badge with icon. Availabel options: 'small', 'medium', 'large'. Default: 'medium'",
    },
  },
};

export default meta;
type Story = StoryObj<MasBadge>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Overview: Story = {
  args: {
    size: 'large',
    number: 1,
    type: 'number',
    color: 'primary',
  },
};

// export const Color: Story = {
//   render: () => ({
//     template: `
//       <div style="display: flex; gap: 20px">
//         <mas-badge color="primary"></mas-badge>
//         <mas-badge color="warning"></mas-badge>
//         <mas-badge color="success"></mas-badge>
//         <mas-badge color="alert"></mas-badge>
//         <mas-badge color="brand"></mas-badge> 
//       </div>
//       `,
//   }),
// };
export const Number: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 20px">
        <mas-badge color="primary" size="large" [number]="0" type="number"></mas-badge>
        <mas-badge color="primary" size="large" [number]="9" type="number"></mas-badge>
        <mas-badge color="primary" size="large" [number]="100" type="number"></mas-badge>
      </div>
      `,
  }),
};