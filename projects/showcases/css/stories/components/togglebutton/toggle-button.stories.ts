import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormControl, Validator } from '@angular/forms';
import { ToggleGroupComponent, ToggleGroupModule } from './toggle-group.component';

const meta: Meta<ToggleGroupComponent> = {
  component: ToggleGroupComponent,
  title: 'Components/Toggle Button',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, ToggleGroupModule],
    }),
  ],
  render: (args: ToggleGroupComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<ToggleGroupComponent>;

export const Overview: Story = {
  args: {
    args: [
      {
        identifier: 'my-toggle-button',
        name: 'toggle',
        size: 'S',
        disabled: false,
      },
      {
        identifier: 'my-toggle-button',
        name: 'toggle',
        size: 'S',
        disabled: true,
      },
      {
        identifier: 'my-toggle-button',
        name: 'toggle',
        size: 'L',
        disabled: false,
      },
      {
        identifier: 'my-toggle-button',
        name: 'toggle',
        size: 'L',
        disabled: true,
      },
    ],
  },
};
