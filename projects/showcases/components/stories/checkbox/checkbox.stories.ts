import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { userEvent, within } from '@storybook/testing-library';
import { CommonModule } from '@angular/common';
import { MasCheckbox } from 'projects/components/src/lib/checkbox/checkbox.component';
import { MasCheckboxModule } from 'projects/components/src/lib/checkbox/checkbox.module';
const meta: Meta<MasCheckbox> = {
  component: MasCheckbox,
  argTypes: { onChange: { action: 'click' } },
  tags: ['autodocs'],
  title: 'Components/Checkbox',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasCheckboxModule],
    }),
  ],

  render: (args: MasCheckbox) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<MasCheckbox>;
export const Indeterminate: Story = {
  args: {
    labelText: 'Indeterminate checkbox',
    identifier: '1',
    disabled: false,
    indeterminate: true,
    size: 'L',
  },
  argTypes: {
    labelText: { control: 'text', description: '' },
    identifier: { control: 'text', description: '' },
    checked: { control: 'boolean', description: '' },
    disabled: {
      control: 'boolean',
      description: '',
    },
    indeterminate: {
      control: 'boolean',
      description:
        'The indeterminate state is activated when the checkbox contains a sublist of selections, some of which are selected, and some unselected.',
    },
    size: {
      description: 'The checkbox has two sizes available. the small is used by default in the majority of cases.',
      control: 'radio',
      options: ['S', 'L'],
    },
  },
};
// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Overview: Story = {
  args: {
    labelText: 'Overview checkbox',
    identifier: '1',
    checked: false,
    disabled: false,
    size: 'S',
  },
  argTypes: {
    size: {
      description: '',
      control: 'radio',
      options: ['S', 'L'],
    },
  },
};
