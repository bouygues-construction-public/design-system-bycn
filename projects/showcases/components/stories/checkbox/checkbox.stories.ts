import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MasCheckbox } from 'projects/components/src/lib/checkbox/checkbox.component';
import { MasCheckboxModule } from 'projects/components/src/lib/checkbox/checkbox.module';

const meta: Meta<MasCheckbox> = {
  component: MasCheckbox,
  argTypes: { onChange: { action: 'click' } },
  // tags: ['autodocs'],
  title: 'Components/Selection controls/Checkbox',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasCheckboxModule],
    }),
  ],
  parameters: {
    componentSubtitle: 'Checkboxes are used to let a user select one or more options of a limited number of choices.',
    docs: {
      description: {
        component: ` 
        * Checkboxes are recommended to allow the user to select one or more items from a list.
        * It can also be used on its own to activate a parameter in body content or a form.
        * A checkbox can also be used without a label to integrate it into a component (Example : a row of a data table)`,
      },
    },
  },
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
    size: 'S',
    checked: true,
  },
  argTypes: {
    labelText: { control: 'text', description: 'Checkbox label' },
    identifier: {
      control: 'text',
      description: 'A unique id for the checkbox input. If none is supplied, it will be auto-generated.',
    },
    checked: { control: 'boolean', description: 'Whether the checkbox is checked.' },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled. ',
    },
    indeterminate: {
      control: 'boolean',
      description:
        'The indeterminate state is activated when the checkbox contains a sublist of selections, some of which are selected, and some unselected.',
    },
    size: {
      description:
        "The checkbox has two sizes available: 'S' 'M'. The 'S' is used by default in the majority of cases.",
      control: 'radio',
      options: ['S', 'L'],
    },
  },
};
export const Determinate: Story = {
  args: {
    labelText: 'Determinate checkbox',
    identifier: '1',
    disabled: false,
    indeterminate: false,
    size: 'S',
    checked: true,
  },
};
export const Size: Story = {
  render: (args: MasCheckbox) => ({
    template: `
      <mas-checkbox labelText="Small size" size="S"></mas-checkbox>
      <br>
      <mas-checkbox labelText="Large size" size="L"></mas-checkbox>
      `,
  }),
}
export const Overview: Story = {
  render: (args: MasCheckbox) => ({
    template: `
      <mas-checkbox labelText="Sand"></mas-checkbox>
      <mas-checkbox labelText="Bricks" [checked]="true"></mas-checkbox>
      <mas-checkbox labelText="Stone and Rock" [disabled]=true [checked]="true"></mas-checkbox>
      <mas-checkbox labelText="Wood and timber" [disabled]="true"></mas-checkbox>
      <br>
      <mas-checkbox labelText="I accept the term and conditions of BYCN" size="L"></mas-checkbox>
      `,
  }),
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
