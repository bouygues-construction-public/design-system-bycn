import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MasTextInput } from 'projects/components/src/lib/text-input/text-input.component';
import { MasTextInputModule } from 'projects/components/src/lib/text-input/text-input.module';
import { MasErrorModule, MasHelperModule, MasLabelModule } from 'projects/components/src/lib/sub-elements';

const meta: Meta<MasTextInput> = {
  component: MasTextInput,
  tags: ['autodocs'],
  title: 'Components/Text input',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasTextInputModule, MasErrorModule, MasLabelModule, MasHelperModule],
    }),
  ],
  parameters: {
    componentSubtitle: "Text inputs enable users to share query that can't be anticipated.",
    docs: {
      description: {
        component: ` 
        * When a user needs to provide specific information that cannot be anticipated using predefined choices (operationnal data, living data).
        * When a user wants to input easily memorable data more efficiently using free-form text rather than a more intricate control method.`,
      },
    },
  },
  render: (args: MasTextInput) => ({
    template: `
    <mas-label [optional]="true" [infoIcon]="true">Label text</mas-label>
    <mas-text-input [required]="required" [disabled]="disabled" [placeholder]="placeholder" [size]="size" [filled]="filled">
    <mas-error >Something went wrong</mas-error>
    <mas-helper >click to select</mas-helper>
    </mas-text-input>
    `,
    props: {
      ...args,
    },
  }),
  argTypes: {
    onChange: { action: 'change' },
    size: {
      description: "The size of the text-input. Availabel options: 'S', 'M'. Default: 'S'",
      options: ['S', 'M'],
      control: { type: 'radio' },
      defaultValue: 'S',
    },
    disabled: { description: 'Whether the component is disabled' },
    required: { description: 'Whether the component is required' },
    type: {
      description:
        "Input type of the element. Available options: 'text', 'search', 'tel', 'password', 'email'. Default: 'text'",
      options: ['text', 'search', 'tel', 'password', 'email'],
      control: { type: 'select' },
    },
    filled: { type: { name: 'boolean', required: false }, description: 'Whether the placeholder is filled' },
    placeholder: {
      type: { name: 'string', required: false },
      description: 'Placeholder to be shown if no value has been selected.',
    },
  },
};

export default meta;
type Story = StoryObj<MasTextInput>;

export const Overview: Story = {
  args: {
    placeholder: 'type here',
    disabled: false,
    required: false,
    filled: false,
    size: 'S',
    type: 'text',
  },
};
