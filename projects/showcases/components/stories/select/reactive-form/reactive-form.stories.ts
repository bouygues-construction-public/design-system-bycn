import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { SelectExample } from './select-example.component';
import { MasSelectModule } from 'projects/components/src/lib/select/select.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MasErrorModule, MasHelperModule, MasLabelModule } from 'projects/components/src/lib/sub-elements';
const meta: Meta<SelectExample> = {
  component: SelectExample,
  title: 'Components/Forms/Select',
  decorators: [
    moduleMetadata({
      declarations: [SelectExample],
      imports: [CommonModule, MasSelectModule, ReactiveFormsModule, MasErrorModule, MasLabelModule, MasHelperModule],
    }),
  ],
  render: (args: SelectExample) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<SelectExample>;

export const WithReactiveForm: Story = {
  args: {},
};
