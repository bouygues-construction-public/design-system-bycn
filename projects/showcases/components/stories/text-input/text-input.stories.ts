import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormControl, Validator } from '@angular/forms';
import { MasTextInput } from 'projects/components/src/lib/text-input/text-input.component';
import { MasTextInputModule } from 'projects/components/src/lib/text-input/text-input.module';
const meta: Meta<MasTextInput> = {
  component: MasTextInput,
  tags: ['autodocs'],
  title: 'Components/Text input',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasTextInputModule],
    }),
  ],
  render: (args: MasTextInput) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
    size: {
      description: "",
      options: ['S', 'L'],
      control: { type: 'radio' },
      defaultValue: 'S'
    },
  },
};

export default meta;
type Story = StoryObj<MasTextInput>;

export const Overview: Story = {
  args: {

  },
};