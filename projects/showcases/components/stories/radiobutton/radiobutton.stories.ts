import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormControl, Validator } from '@angular/forms';
import { MasRadioButton } from 'projects/components/src/lib/radiobutton/radiobutton.component';
import { MasRadioButtonModule } from 'projects/components/src/lib/radiobutton/radiobutton.module';
const meta: Meta<MasRadioButton> = {
  component: MasRadioButton,
  tags: ['autodocs'],
  title: 'Components/Radio Button',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasRadioButtonModule],
    }),
  ],
  render: (args: MasRadioButton) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
    size: {
      description: "Radio has two size: Small and Large. Small size is set by default.",
      options: ['S', 'L'],
      control: { type: 'radio' },
      defaultValue: 'S'
    },
  },
};

export default meta;
type Story = StoryObj<MasRadioButton>;

export const Overview: Story = {
  args: {
    identifier: 'my-radio-button',
    labelText: 'checked radio',
    disabled: false,
    checked: false,
    size: 'S',
  },
};
