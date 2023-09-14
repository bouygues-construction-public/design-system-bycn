import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MasTextInput } from 'projects/components/src/lib/text-input/text-input.component';
import { MasTextInputModule } from 'projects/components/src/lib/text-input/text-input.module';
import { MasErrorModule, MasHelperModule, MasLabelModule } from 'projects/components/src/lib/sub-elements';

const meta: Meta<MasTextInput> = {
  component: MasTextInput,
  // tags: ['autodocs'],
  title: 'Components/Forms/Text input',
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
        * When a user needs to provide specific information that cannot be anticipated using predefined choices (operational data, living data).
        * When a user wants to input easily memorable data more efficiently using free-form text rather than a more intricate control method.`,
      },
    },
  },
  render: (args: MasTextInput) => ({
    template: `
    <mas-label [optional]="true" [infoIcon]="true">Label text</mas-label>
    <mas-text-input [type]="type" [required]="required" [disabled]="disabled" [placeholder]="placeholder" [size]="size" [filled]="filled">
      <mas-error >Set your error message here...</mas-error>
      <mas-helper >Helper text goes here</mas-helper>
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

export const Basic: Story = {
  args: {
    placeholder: 'Placeholder text',
    disabled: false,
    required: true,
    filled: false,
    size: 'S',
    type: 'text',
  },
};

export const Overview: Story = {
  render: (args: MasTextInput) => ({
    template: `
    <mas-label [optional]="true" [infoIcon]="true">Label text</mas-label>
    <mas-text-input [type]="type" [required]="required" [disabled]="disabled" placeholder="Placeholder text" [size]="size" [filled]="filled">
      <mas-error >Set your error message here...</mas-error>
      <mas-helper >Helper text goes here</mas-helper>
    </mas-text-input>
    `,
  }),
};
export const Error: Story = {
  render: (args: MasTextInput) => ({
    template: `
    <mas-label [optional]="true" [infoIcon]="true">Label text</mas-label>
    <mas-text-input size="S" [filled]="false" [invalid]="true">
    <mas-error >Set your error message here...</mas-error>
    </mas-text-input>
    `,
  }),
};
export const HelperText: Story = {
  render: (args: MasTextInput) => ({
    template: `
    <mas-label [optional]="true" [infoIcon]="true">Label text</mas-label>
    <mas-text-input size="S" [filled]="false" [invalid]="false">
    <mas-helper >Helper text goes here</mas-helper>
    </mas-text-input>
    `,
  }),
};
export const Size: Story = {
  render: (args: MasTextInput) => ({
    template: `
    <mas-label [optional]="true" [infoIcon]="true">Small Text Input</mas-label>
    <mas-text-input size="S" [filled]="false" [invalid]="false">
    </mas-text-input>
    <br>
    <mas-label [optional]="true" [infoIcon]="true">Large Text Input</mas-label>
    <mas-text-input size="M" [filled]="false" [invalid]="false">
    </mas-text-input>
    `,
  }),
};
export const Type: Story = {
  render: (args: MasTextInput) => ({
    template: `
    <br>
      <mas-label [optional]="true" [infoIcon]="true">Label text</mas-label>
        <mas-text-input size="S" [filled]="false" type="text">
      </mas-text-input>
    <br>
      <mas-label [optional]="false" [infoIcon]="true">Telephone number</mas-label>
        <mas-text-input size="S" [filled]="false" type="tel">
      </mas-text-input>
    <br>
      <mas-label [optional]="true" [infoIcon]="true">Password</mas-label>
        <mas-text-input size="S" [filled]="false" type="password">
      </mas-text-input>
    <br>
      <mas-label [optional]="true" [infoIcon]="true">Email</mas-label>
      <mas-text-input size="S" [filled]="false" type="email"></mas-text-input>
    <br>
    <mas-text-input size="S" [filled]="false" type="search" placeholder="Search.."></mas-text-input>
    `,
  }),
};
export const Disabled: Story = {
  render: (args: MasTextInput) => ({
    template: `
    <mas-label>Disabled State</mas-label>
    <mas-text-input [disabled]="true" placeholder="Placeholder text" [filled]="false">
    <mas-error >Set your error message here...</mas-error>
    <mas-helper >Helper text goes here</mas-helper>
    </mas-text-input>
    `,
  }),
};
