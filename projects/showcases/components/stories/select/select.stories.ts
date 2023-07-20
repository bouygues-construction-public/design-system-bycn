import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { SelectExample, SelectExampleModule } from './select-example';

import { FormControl, Validators } from '@angular/forms';
const meta: Meta<SelectExample> = {
  component: SelectExample,
  title: 'Components/Select',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, SelectExampleModule],
    }),
  ],
  render: (args: SelectExample) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<SelectExample>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Overview: Story = {
  args: {
    arg: {
      label: 'Select',
      helperText: 'Click to select',
      errorMessage: 'Something went wrong',
    },
  },
};
