import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { TextInputExample } from './text-input-text-example.component';
import { MasTextInputModule } from 'projects/components/src/lib/text-input/text-input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MasErrorModule, MasHelperModule, MasLabelModule } from 'projects/components/src/lib/sub-elements';
const meta: Meta<TextInputExample> = {
  component: TextInputExample,
  title: 'Components/Forms/Text input/Reactive Form',
  decorators: [
    moduleMetadata({
      declarations: [TextInputExample],
      imports: [CommonModule, MasTextInputModule, ReactiveFormsModule, MasErrorModule, MasLabelModule, MasHelperModule],
    }),
  ],
  render: (args: TextInputExample) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<TextInputExample>;

export const WithReactiveForm: Story = {
  args: {},
};
