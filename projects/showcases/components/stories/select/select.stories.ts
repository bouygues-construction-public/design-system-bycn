import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { SelectExample, SelectExampleModule } from './select-example';

const meta: Meta<SelectExample> = {
  component: SelectExample,
  title: 'Components/Select',
  tags: ['autodocs'],
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
  argTypes: {
    label: { description: '' },
    size: { control: 'radio', options: ['S', 'M'], description: '' },
    helperText: { description: 'Helper text' },
    errorMessage: { description: '' },
    invalid: { description: '' },
    disabled: { description: '' },
    placeholder: { description: '' },
  },
};

export default meta;
type Story = StoryObj<SelectExample>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Overview: Story = {
  args: {
    label: 'Select',
    helperText: 'Click to select',
    errorMessage: 'Something went wrong',
    invalid: false,
    disabled: false,
    placeholder: 'Select your option',
    size: 'S',
  },
};
