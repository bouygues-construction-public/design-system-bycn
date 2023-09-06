import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ToggleButtonExample } from './toggle-button-example.component';
import { MasToggleButtonModule } from 'projects/components/src/lib/togglebutton/toggle-button.module';
import { ReactiveFormsModule } from '@angular/forms';
const meta: Meta<ToggleButtonExample> = {
  component: ToggleButtonExample,
  title: 'Components/Selection controls/Toggle Button',
  decorators: [
    moduleMetadata({
      declarations: [ToggleButtonExample],
      imports: [CommonModule, MasToggleButtonModule, ReactiveFormsModule],
    }),
  ],
  render: (args: ToggleButtonExample) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<ToggleButtonExample>;

export const WithReactiveForm: Story = {
  args: {},
};
