import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MasCheckbox } from './checkbox.component';

const meta: Meta<MasCheckbox> = {
  component: MasCheckbox,
  title: 'Components/Checkbox',
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  render: (args: MasCheckbox) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<MasCheckbox>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Overview: Story = {
  args: {
    labelText: 'Overview checkbox',
    identifier: '1',
    checked: true,
    disabled: false,
    indeterminate: false,
  },
};

export const Indeterminate: Story = {
  args: {
    labelText: 'Indeterminate checkbox',
    identifier: '2',
    checked: true,
    disabled: false,
    indeterminate: true,
    size: 'L',
  },
};
