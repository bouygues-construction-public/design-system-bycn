import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MasActionDropdownModule, MasActionDropdown } from 'projects/components/src/public-api';
import { MasErrorModule, MasHelperModule, MasLabelModule } from 'projects/components/src/lib/sub-elements';

const meta: Meta<MasActionDropdown> = {
  component: MasActionDropdown,
  title: 'Components/Actions/Action Dropdown',
  // tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasErrorModule, MasHelperModule, MasLabelModule, MasActionDropdownModule],
    }),
  ],
  parameters: {
    componentSubtitle: '',
    docs: {
      description: {
        component: ` 
        `,
      },
    },
  },
  render: (args: MasActionDropdown) => ({
    props: {
      ...args,
    },
    template: `
      <div style="height: 180px;">
        <mas-action-dropdown [disabled]="disabled" [labelText]="labelText" [size]="size">
          <mas-dropdown-option value="option1">Close job</mas-dropdown-option>
          <mas-dropdown-option value="option2">Add in favorite</mas-dropdown-option>
          <mas-dropdown-option value="option3">Convert</mas-dropdown-option>
          <mas-dropdown-option value="option4">Clone</mas-dropdown-option>
        </mas-action-dropdown>
      </div>
      <br>
    `,
  }),
  argTypes: {
    labelText: {type: {name: "string", required: true}},
    size: {
      type: { name: 'string', required: false },
      control: 'radio',
      options: ['S', 'M'],
      description: "The size of the action dropdown. Availabel options: 'S', 'M'. Default: 'S'",
    },
    disabled: { type: { name: 'boolean', required: false }, description: 'Whether the component is disabled' },
    onChange: { action: 'click' },
  },
};

export default meta;
type Story = StoryObj<MasActionDropdown>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Basic: Story = {
  args: {
    labelText: "More",
    disabled: false,
    size: 'S',
  },
};

export const LeadingIcon: Story = {
  render: (args: MasActionDropdown) => ({
    template: `
      <div style="height: 150px;">
        <mas-action-dropdown [disabled]="disabled" [size]="size" labelText="Button" leadingIcon="mas-info-outlined mas-security-and-warnings--outlined mas-icon">
          <mas-dropdown-option value="option1" icon="mas-browsers-outlined mas-system-and-device--outlined" type="icon">Option 1</mas-dropdown-option>
          <mas-dropdown-option value="option2" icon="mas-eye-outlined mas-design--outlined" type="icon">Option 2</mas-dropdown-option>
          <mas-dropdown-option value="option3" icon="mas-chat-circle-text-outlined mas-communication--outlined" type="icon">Option 3</mas-dropdown-option>
        </mas-action-dropdown>
      </div>
      <br>
    `,
  }),
};

export const Size: Story = {
  render: (args: MasActionDropdown) => ({
    template: `
      <div style="height: 150px; width: 100%">
        <mas-action-dropdown size="S" labelText="Button small size" >
          <mas-dropdown-option value="option1">Option 1</mas-dropdown-option>
          <mas-dropdown-option value="option2">Option 2</mas-dropdown-option>
          <mas-dropdown-option value="option3">Option 3</mas-dropdown-option>
        </mas-action-dropdown>
      </div>
      <br/>
      <div style="height: 180px; width: 100%">
        <mas-action-dropdown size="M" labelText="Button medium size">
          <mas-dropdown-option value="option1">Option 1</mas-dropdown-option>
          <mas-dropdown-option value="option2">Option 2</mas-dropdown-option>
          <mas-dropdown-option value="option3">Option 3</mas-dropdown-option>
        </mas-action-dropdown>
      </div>
    `,
  }),
};
export const Disabled: Story = {
  render: (args: MasActionDropdown) => ({
    template: `
      <mas-action-dropdown [size]="M" labelText="Button" [disabled]="true">
        <mas-dropdown-option value="option_1">Option 1</mas-dropdown-option>
        <mas-dropdown-option value="option_2">Option 2</mas-dropdown-option>
        <mas-dropdown-option value="option_3">Option 3</mas-dropdown-option>
      </mas-action-dropdown>
    `,
  }),
};
