import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MasErrorModule, MasHelperModule, MasLabelModule } from 'projects/components/src/lib/sub-elements';
import { MasSelectModule, MasSelect } from 'projects/components/src/public-api';

const meta: Meta<MasSelect> = {
  component: MasSelect,
  title: 'Components/Forms/Select',
  // tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasErrorModule, MasHelperModule, MasLabelModule, MasSelectModule],
    }),
  ],
  parameters: {
    componentSubtitle: '',
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
    <div style="height: 150px;">
      <mas-label [optional]="true" [infoIcon]="true">Label text</mas-label>
      <mas-select [invalid]="invalid" [disabled]="disabled" [placeholder]="placeholder" [size]="size" [filled]="filled">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </mas-select>
    </div>
    <br>
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
export const Basic: Story = {
  args: {
    invalid: false,
    disabled: false,
    filled: false,
    placeholder: 'Select your option',
    size: 'S',
  },
};
export const Overview: Story = {
  render: (args: MasSelect) => ({
    template: `
    <div style="height: 150px;">
      <mas-label [optional]="true" [infoIcon]="true">Label text</mas-label>
      <mas-select placeholder="Placeholder text" [size]="size" [filled]="false" [disabled]="false">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </mas-select>
      <mas-error *ngIf="false">Something went wrong</mas-error>
      <mas-helper *ngIf="true">Helper text here...</mas-helper>
    </div>

    `,
  }),
};

export const Error: Story = {
  render: (args: MasSelect) => ({
    template: `
    <div style="height: 150px;">
      <mas-label [optional]="true" [infoIcon]="true">With Error Message</mas-label>
      <mas-select placeholder="Placeholder text" [size]="size" [filled]="false" [invalid]="true">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </mas-select>
      <mas-error *ngIf="true">Something went wrong</mas-error>
    </div>
    `,
  }),
};
export const HelperText: Story = {
  render: (args: MasSelect) => ({
    template: `
    <div style="height: 150px;">
      <mas-label [optional]="true" [infoIcon]="true">With Helper Text</mas-label>
      <mas-select placeholder="Placeholder text" [size]="size" [filled]="false">
        <option value="option_1">Option 1</option>
        <option value="option_2">Option 2</option>
        <option value="option_3">Option 3</option>
      </mas-select>
      <mas-helper *ngIf="true">Helper text here...</mas-helper>
    </div>
    `,
  }),
};

export const Disabled: Story = {
  render: (args: MasSelect) => ({
    template: `
    <mas-label>Disabled State</mas-label>
    <mas-select placeholder="Placeholder text" [size]="size" [filled]="false" [disabled]="true">
      <option value="option_1">Option 1</option>
      <option value="option_2">Option 2</option>
      <option value="option_3">Option 3</option>
    </mas-select>
    <mas-helper *ngIf="true">Helper text here...</mas-helper>
    `,
  }),
};
export const Size: Story = {
  render: (args: MasSelect) => ({
    template: `
    <mas-label [optional]="true" [infoIcon]="true">Small select</mas-label>
    <mas-select placeholder="Placeholder text" size="S" [filled]="false" [disabled]="false">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </mas-select>
    <br>
    <div style="height: 150px;">
      <mas-label [optional]="true" [infoIcon]="true">Label text</mas-label>
      <mas-select placeholder="Placeholder text" size="M" [filled]="false" [disabled]="false">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </mas-select>
    </div>
    `,
  }),
};
export const Filled: Story = {
  render: (args: MasSelect) => ({
    template: `
    <div style="height: 150px;">
      <mas-label [optional]="true" [infoIcon]="true">Label text</mas-label>
      <mas-select placeholder="Placeholder text" [size]="size" [filled]="true" [disabled]="false" [invalid]="false">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </mas-select>
      <mas-error *ngIf="false">Something went wrong</mas-error>
      <mas-helper *ngIf="true">Helper text here...</mas-helper>
    </div>
    `,
  }),
};
