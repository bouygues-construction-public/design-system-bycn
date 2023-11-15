import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { InputDropdownExample } from './input-dropdown-example.component';
import { MasInputDropdownModule } from 'projects/components/src/lib/input-dropdown/input-dropdown.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MasErrorModule, MasHelperModule, MasLabelModule } from 'projects/components/src/lib/sub-elements';
const meta: Meta<InputDropdownExample> = {
  component: InputDropdownExample,
  title: 'Components/Forms/Input Dropdown',
  decorators: [
    moduleMetadata({
      declarations: [InputDropdownExample],
      imports: [CommonModule, MasInputDropdownModule, ReactiveFormsModule, MasErrorModule, MasLabelModule, MasHelperModule],
    }),
  ],
  render: (args: InputDropdownExample) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<InputDropdownExample>;

export const WithReactiveForm: Story = {
  args: {},
};
