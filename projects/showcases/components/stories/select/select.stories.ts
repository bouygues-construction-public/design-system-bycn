import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MasErrorModule, MasHelperModule, MasLabelModule } from 'projects/components/src/lib/sub-elements';
import { MasSelectModule, MasSelect } from 'projects/components/src/public-api';

const meta: Meta<MasSelect> = {
  component: MasSelect,
  title: 'Components/Select',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasErrorModule, MasHelperModule, MasLabelModule, MasSelectModule],
    }),
  ],
  render: (args: MasSelect) => ({
    props: {
      ...args,
    },
    template: `
    <mas-label [optional]="true" [infoIcon]="true">Label text</mas-label>
    <mas-select [invalid]="invalid" [disabled]="disabled" [placeholder]="placeholder" [size]="size" [filled]="filled">
      <mas-option value="option1">Option 1</mas-option>
      <mas-option value="option2">Option 2</mas-option>
      <mas-option value="option3">Option 3</mas-option>
    </mas-select>
    <mas-error *ngIf="invalid">Something went wrong</mas-error>
    <mas-helper *ngIf="!invalid">click to select</mas-helper>
    `,
  }),
  argTypes: {
    size: {
      type: { name: 'string', required: false },
      control: 'radio',
      options: ['S', 'M'],
      description: "The size of the select. Availabel options: 'S', 'M'. Default: 'S'",
    },
    invalid: { type: { name: 'boolean', required: false }, description: 'Whether the component is disabled' },
    disabled: { type: { name: 'boolean', required: false }, description: 'Whether the component is disabled' },
    filled: { type: { name: 'boolean', required: false }, description: 'Whether the placeholder is filled' },
    placeholder: {
      type: { name: 'string', required: false },
      description: 'Placeholder to be shown if no value has been selected.',
    },
    onChange: {action: 'click'}
  },
};

export default meta;
type Story = StoryObj<MasSelect>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Overview: Story = {
  args: {
    invalid: false,
    disabled: false,
    filled: false,
    placeholder: 'Select your option',
    size: 'S',
  },
};
