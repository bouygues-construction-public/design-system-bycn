import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Checkboxes } from './checkboxes.component';
import { MasCheckboxModule } from 'projects/components/src/lib/checkbox/checkbox.module';
import { FormControl, Validators } from '@angular/forms';
const meta: Meta<Checkboxes> = {
  component: Checkboxes,
  title: 'Components/Checkbox',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasCheckboxModule],
    }),
  ],
  render: (args: Checkboxes) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<Checkboxes>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Overview: Story = {
  args: {
    checkboxes: [
        {
            labelText: 'Checked',
            identifier: '1',
            checked: true,
            disabled: false,
            indeterminate: false,
            size: 'S',
            formControl: new FormControl('', [Validators.required])
        },
        {
            labelText: 'Unchecked',
            identifier: '2',
            checked: false,
            disabled: false,
            indeterminate: false,
            size: 'S'
        },
        {
            labelText: 'Disabled Checked',
            identifier: '3',
            checked: true,
            disabled: true,
            indeterminate: false,
            size: 'S'
        },
        {
            labelText: 'Disabled Unchecked',
            identifier: '4',
            checked: false,
            disabled: true,
            indeterminate: false,
            size: 'S'
        },
    ]
  },
};

export const Indeterminate: Story = {
  args: {
    checkboxes: [
        {
            labelText: 'Indeterminated',
            identifier: '1',
            checked: false,
            disabled: false,
            indeterminate: true,
            size: 'L',
        },
        {
            labelText: 'Determinated',
            identifier: '2',
            checked: true,
            disabled: false,
            Indeterminate: false,
            size: 'L',
        },
        {
            labelText: 'Disabled Indeterminated',
            identifier: '3',
            checked: false,
            disabled: true,
            indeterminate: true,
            size: 'L',
        },
        {
            labelText: 'Disabled Determinated',
            identifier: '4',
            checked: true,
            disabled: true,
            indeterminate: false,
            size: 'L',
        }
    ]
  },
};