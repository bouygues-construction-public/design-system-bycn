import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MasCheckboxModule } from 'projects/components/src/lib/checkbox/checkbox.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxExample } from './checkbox-example.component';
const meta: Meta<CheckboxExample> = {
  component: CheckboxExample,
  argTypes: {},
  title: 'Components/Selection controls/Checkbox',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasCheckboxModule, ReactiveFormsModule, MasCheckboxModule],
      declarations: [CheckboxExample],
    }),
  ],
  
  render: (args: CheckboxExample) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<CheckboxExample>;
// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const WithReactiveForm: Story = {
  args: {},
};