import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// import { FormControl, Validator } from '@angular/forms';
import { MasToggleButton } from 'projects/components/src/lib/togglebutton/toggle-button.component';
import { MasToggleButtonModule } from 'projects/components/src/lib/togglebutton/toggle-button.module';
import { FormControl } from '@angular/forms';
const meta: Meta<MasToggleButton> = {
  component: MasToggleButton,
  title: 'Components/Toggle Button',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasToggleButtonModule],
    }),
  ],
  render: (args: MasToggleButton) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<MasToggleButton>;

export const Overview: Story = {
  args: {
    labelText: 'Toggle button',
    identifier: 'my-toggle-button',
    name: 'toggle',
    size: 'S',
    disabled: false,
    formControl: new FormControl(false, [])
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['S', 'L'],
    },
  },
};
