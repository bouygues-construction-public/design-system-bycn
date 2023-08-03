import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormControl, Validator } from '@angular/forms';
import { MasRadioButtonModule } from 'projects/components/src/lib/radiobutton/radiobutton.module';
import { RadioButtonGroupComponent } from './radiobutton-group.component';
const meta: Meta<RadioButtonGroupComponent> = {
  component: RadioButtonGroupComponent,
  title: 'Components/Radio\ Button',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasRadioButtonModule],
    }),
  ],
  argTypes: {
    size: {
      options: ['S', 'L'],
      control: {type: 'radio'},
      default: 'S'
    },
    disabled: {
      control: 'boolean',
    }
  },
  
  render: (args: RadioButtonGroupComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<RadioButtonGroupComponent>;

export const Overview: Story = {
  args: {},
};
