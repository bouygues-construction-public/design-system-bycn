import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { DropdownExample } from './dropdown-example.component';
import { MasDropdownModule } from 'projects/components/src/lib/dropdown/dropdown.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MasErrorModule, MasHelperModule, MasLabelModule } from 'projects/components/src/lib/sub-elements';
const meta: Meta<DropdownExample> = {
  component: DropdownExample,
  title: 'Components/Forms/Dropdown',
  decorators: [
    moduleMetadata({
      declarations: [DropdownExample],
      imports: [CommonModule, MasDropdownModule, ReactiveFormsModule, MasErrorModule, MasLabelModule, MasHelperModule],
    }),
  ],
  render: (args: DropdownExample) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<DropdownExample>;

export const WithReactiveForm: Story = {
  args: {},
};
