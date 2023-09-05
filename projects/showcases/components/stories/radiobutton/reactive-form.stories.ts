import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validator } from '@angular/forms';
import { RadioButtonExample } from './radiobutton-example.component';
import { MasRadioButtonModule } from 'projects/components/src/lib/radiobutton/radiobutton.module';
const meta: Meta<RadioButtonExample> = {
  component: RadioButtonExample,
  title: 'Components/Selection controls/Radio Button/Reactive Form',
  decorators: [
    moduleMetadata({
      declarations: [RadioButtonExample],
      imports: [CommonModule, ReactiveFormsModule, MasRadioButtonModule],
    }),
  ],
  render: (args: RadioButtonExample) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<RadioButtonExample>;

export const WithReactiveForm: Story = {
  args: {},
};
