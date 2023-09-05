import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MasErrorModule, MasHelperModule, MasLabelModule } from 'projects/components/src/lib/sub-elements';
import { MasSelectModule, MasSelect } from 'projects/components/src/public-api';

const meta: Meta<MasSelect> = {
  component: MasSelect,
  title: 'Components/Select controls/Select',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasErrorModule, MasHelperModule, MasLabelModule, MasSelectModule],
    }),
  ],
  parameters: {
    componentSubtitle:
      'Selects are intended for selecting options from a reduced list. The list must contain a minimum of 3 items. It is a component that allows the user to input data and provide context for their choices or journey.',
    docs: {
      description: {
        component: ` 
        * Use the select element to make a selection from a predefined list of items. The items should be as concise and understandable as possible.
        * The select element is primarily used in forms.`,
      },
    },
  },
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
    <mas-helper *ngIf="!invalid">Helper text here...</mas-helper>
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
    onChange: { action: 'click' },
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

export const Error: Story = {
  render: (args: MasSelect) => ({
    template: `
    <mas-label [optional]="true" [infoIcon]="true">Label text</mas-label>
    <mas-select placeholder="Placeholder text" [size]="size" [filled]="false" [invalid]="true">
      <mas-option value="option1">Option 1</mas-option>
      <mas-option value="option2">Option 2</mas-option>
      <mas-option value="option3">Option 3</mas-option>
    </mas-select>
    <mas-error *ngIf="true">Something went wrong</mas-error>
    `,
  }),
}
export const Disabled: Story = {
  render: (args: MasSelect) => ({
    template: `
    <mas-label [optional]="true" [infoIcon]="true">Label text</mas-label>
    <mas-select placeholder="Placeholder text" [size]="size" [filled]="false" [disabled]="true">
      <mas-option value="option1">Option 1</mas-option>
      <mas-option value="option2">Option 2</mas-option>
      <mas-option value="option3">Option 3</mas-option>
    </mas-select>
    <mas-error *ngIf="false">Something went wrong</mas-error>
    <mas-helper *ngIf="true">Helper text here...</mas-helper>
    `,
  }),
}
export const Filled: Story = {
  render: (args: MasSelect) => ({
    template: `
    <mas-label [optional]="true" [infoIcon]="true">Label text</mas-label>
    <mas-select placeholder="Placeholder text" [size]="size" [filled]="true" [disabled]="false" [invalid]="false">
      <mas-option value="option1">Option 1</mas-option>
      <mas-option value="option2">Option 2</mas-option>
      <mas-option value="option3">Option 3</mas-option>
    </mas-select>
    <mas-error *ngIf="false">Something went wrong</mas-error>
    <mas-helper *ngIf="true">Helper text here...</mas-helper>
    `,
  }),
}