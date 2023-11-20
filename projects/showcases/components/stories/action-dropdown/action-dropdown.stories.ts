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
    <div style="height: 150px;">
      <mas-action-dropdown [disabled]="disabled" [size]="size" labelText="Button" leadingIcon="mas-arrow-arc-left-outlined mas-arrows--outlined mas-icon mas-icon-left">
        <mas-dropdown-option value="option1">Option 1</mas-dropdown-option>
        <mas-dropdown-option value="option2">Option 2</mas-dropdown-option>
        <mas-dropdown-option value="option3">Option 3</mas-dropdown-option>
      </mas-action-dropdown>
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
    disabled: { type: { name: 'boolean', required: false }, description: 'Whether the component is disabled' },
    onChange: { action: 'click' },
  },
};

export default meta;
type Story = StoryObj<MasActionDropdown>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Basic: Story = {
  args: {
    disabled: false,
    size: 'S',
  },
};
export const Overview: Story = {
  render: (args: MasActionDropdown) => ({
    template: `
    <div style="height: 150px;">
      <mas-action-dropdown>
      
      </mas-action-dropdown>
    </div>

    `,
  }),
};
