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
  parameters: {
    docs: {
      component:
        'Radio buttons are intended for selecting one option among mutually exclusive choices, rather than multiple options.<br>',
    },
  },
  render: (args: MasRadioButton) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
    identifier: {
      control: 'text',
      description: 'A unique id for the radio button. If none is supplied, it will be auto-generated.',
    },
    labelText: { description: 'Radio button label' },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio button is disabled. ',
    },
    checked: { control: 'boolean', description: 'Whether the radio button is checked.' },
    size: {
      description: 'Radio has two size: Small and Large. Small size is set by default.',
      options: ['S', 'L'],
      control: { type: 'radio' },
      defaultValue: 'S',
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
