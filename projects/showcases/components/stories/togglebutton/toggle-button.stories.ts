import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MasToggleButton, ToggleButtonEvent } from 'projects/components/src/lib/togglebutton/toggle-button.component';
import { MasToggleButtonModule } from 'projects/components/src/lib/togglebutton/toggle-button.module';
const meta: Meta<MasToggleButton> = {
  component: MasToggleButton,
  // tags: ['autodocs'],
  title: 'Components/Selection controls/Toggle Button',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasToggleButtonModule],
    }),
  ],
  parameters: {
    componentSubtitle:
      'Toggle button is a control component that allows you to switch a binary property between two states.',
    docs: {
      description: {
        component: ` 
          * The toggle buttons has several situations where it is best to use it. The most common is in the settings where the user can enable or disable options.
          * When a user wants a selection that doesn't impact the system but selects one or more items, it is recommended to use checkboxes and radio buttons.`,
      },
    },
  },
  render: (args: MasToggleButton) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<MasToggleButton>;

export const Basic: Story = {
  args: {
    identifier: 'my-toggle-button',
    size: 'S',
    disabled: false,
    checked: false
  },
  argTypes: {
    identifier: {
      control: 'text',
      description: 'A unique id for the toggle button. If none is supplied, it will be auto-generated.',
    },
    disabled: { description: 'Whether the toggle button is disabled.' },
    size: {
      description:
        "The toggle button has two sizes available: 'S' 'M'. The 'S' is used by default in the majority of cases.",
      control: 'radio',
      options: ['S', 'L'],
    },
    checked: { control: 'boolean', description: 'Whether the toggle button is checked.' },
    onChange: { action: 'change' },
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
export const Size: Story = {
  render: (args: MasToggleButton) => ({
    template: `
    <mas-toggle-button labelText="toggle button" size="S"></mas-toggle-button>
    <br>
    <mas-toggle-button labelText="toggle button" size="L"></mas-toggle-button>
    `,
  }),
};
export const Overview: Story = {
  render: (args: MasToggleButton) => ({
    template: `
    <div >
      <label style="display: flex; align-items: center"><mas-toggle-button labelText="toggle button" size="S">
        </mas-toggle-button> <span style="margin-left: 10px">Quality</span>
      </label>

      <label style="display: flex; align-items: center"><mas-toggle-button labelText="toggle button" size="S" [disabled]="true" [checked]="true">
        </mas-toggle-button> <span style="margin-left: 10px">Relational</span>
      </label>

      <label style="display: flex; align-items: center"><mas-toggle-button labelText="toggle button" size="S" [checked]="true">
        </mas-toggle-button> <span style="margin-left: 10px">Security</span>
      </label>

      <label style="display: flex; align-items: center"><mas-toggle-button labelText="toggle button" size="S">
        </mas-toggle-button> <span style="margin-left: 10px" class="ml-10">Technicality</span>
      </label>
    <div>
    `,
  }),
};
