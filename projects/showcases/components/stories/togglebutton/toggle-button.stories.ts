import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MasToggleButton } from 'projects/components/src/lib/togglebutton/toggle-button.component';
import { MasToggleButtonModule } from 'projects/components/src/lib/togglebutton/toggle-button.module';
const meta: Meta<MasToggleButton> = {
  component: MasToggleButton,
  tags: ['autodocs'],
  title: 'Components/Toggle Button',
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

export const Overview: Story = {
  args: {
    identifier: 'my-toggle-button',
    size: 'S',
    disabled: false,
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
    onChange: { action: 'change' },
  },
};
