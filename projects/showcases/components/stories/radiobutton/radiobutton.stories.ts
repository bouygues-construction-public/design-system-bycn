import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormControl, Validator } from '@angular/forms';
import { MasRadioButton } from 'projects/components/src/lib/radiobutton/radiobutton.component';
import { MasRadioButtonModule } from 'projects/components/src/lib/radiobutton/radiobutton.module';
const meta: Meta<MasRadioButton> = {
  component: MasRadioButton,
  tags: ['autodocs'],
  title: 'Components/Selection controls/Radio Button',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasRadioButtonModule],
    }),
  ],
  parameters: {
    componentSubtitle:
      'Radio buttons are intended for selecting one option among mutually exclusive choices, rather than multiple options.',
    docs: {
      description: {
        component: ` 
        * When you want to retrieve some information or allow your user to make some unique choices.
        * In data table, side panels, any settings action or area.`,
      },
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
export const Disabled: Story = {
  args: {
    identifier: 'my-radio-button',
    labelText: 'Disabled radio',
    disabled: true,
    checked: false,
    size: 'S',
  },
};
export const Size: Story = {
  render: (args: MasRadioButton) => ({
    template: `
    <form [formGroup]="formGroup">
      <mas-radio-group formControlName="radioGroup" disabled="true">
        <mas-radio-button labelText="Housing" value="1" [disabled]="false" size="S"></mas-radio-button>
        <mas-radio-button labelText="Offices" value="2" [disabled]="false" size="S"></mas-radio-button>
        <br>
        <mas-radio-button labelText="Industry" value="3" [disabled]="false" size="L"></mas-radio-button>
        <mas-radio-button labelText="Shopping centres" value="4" [disabled]="false" size="L"></mas-radio-button>
        </mas-radio-group>
    </form>
    `
  })
}