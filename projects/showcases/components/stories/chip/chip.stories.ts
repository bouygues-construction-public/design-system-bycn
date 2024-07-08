import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MasChip } from 'projects/components/src/lib/chip';

const icons = [
  'mas-arrow-arc-left-outlined mas-arrows--outlined',
  'mas-arrow-circle-left-outlined mas-arrows--outlined',
  'mas-arrow-arc-right-outlined mas-arrows--outlined',
  'mas-arrow-circle-right-outlined mas-arrows--outlined',
  'mas-arrow-square-out-outlined mas-arrows--outlined',
  'mas-info-outlined mas-security-and-warnings--outlined',
  'mas-warning-circle-outlined mas-security-and-warnings--outlined',
  'mas-calendar-blank-outlined mas-time--outlined',
  'mas-smiley-meh-outlined mas-people--outlined',
  'mas-check-outlined mas-system-and-device--outlined',
  'mas-upload-simple-outlined mas-system-and-device--outlined',
  'mas-currency-btc-outlined mas-commerce--outlined',
  'mas-x-outlined mas-math-and-finance--outlined',
];

export default {
  title: 'Components / Selection controls / Chip',
  component: MasChip,
  decorators: [
    moduleMetadata({
      declarations: [MasChip],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: 'Chips can display data or be used for short action.<br/>',
      },
    },
  },
  render: ({...args}) => ({
    props: args
  })
} as Meta;

/** Default: A chip with default settings */
export const Default: StoryObj<MasChip> = {
  args: {
    label: 'Default',
  },
  argTypes: {
    label: {
      description: 'The label of the chip.',
      control: 'text', // Optionally, you can specify the control type for Storybook's controls addon
    },
    selectable: {
      type: { name: 'boolean', required: false },
      description: 'Determines if the chip is selectable.',
      control: 'boolean',
      defaultValue: false,
    },
    removable: {
      type: { name: 'boolean', required: false },
      description: 'Determines if the chip is removable.',
      control: 'boolean',
      defaultValue: false,
    },
    leadingIcon: {
      type: { name: 'string', required: false },
      description: 'Icon name for the leading icon of the chip.',
      defaultValue: null,
      control: 'select',
      options: ['', ...icons],
    },
    actionIcon: {
      type: { name: 'string', required: false },
      description: 'Icon name for the action icon of the chip.',
      defaultValue: null,
      control: 'select',
      options: ['', ...icons],
    },
    imageUrl: {
      type: { name: 'string', required: false },
      description: 'Imgage url to show on the left side of the chip.',
      defaultValue: null,
      control: 'select',
      options: ['', '/assets/img/chip-img.png'],
    },
    onAction: { action: 'Action clicked' }
  },
};

/** FilterChip: A chip with selectable for filtering */
export const FilterChip: StoryObj<MasChip> = {};

FilterChip.args = {
  label: 'Filter chip',
  selectable: true,
};

/** REMOVABLE CHIP */
export const Removable: StoryObj<MasChip> = {};
Removable.args = {
  label: 'Input chip',
  removable: true,
};

Removable.argTypes = { onRemove: { action: 'Remove clicked' } };

/** CHIP WITH IMAGE*/
export const Image: StoryObj<MasChip> = {};
Image.args = {
  label: 'Input chip',
  removable: true,
  imageUrl: '/assets/img/chip-img.png',
};
Removable.argTypes = { onRemove: { action: 'Remove clicked' } };


export const ChipIcon: StoryObj<MasChip> = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 20px">
        <mas-chip label="Input chip" [removable]="false" leadingIcon="mas-check-outlined mas-system-and-device--outlined"></mas-chip>
        <mas-chip label="Input chip" [removable]="false" leadingIcon="mas-x-outlined mas-math-and-finance--outlined"></mas-chip>
        <mas-chip label="Input chip" [removable]="false" leadingIcon="mas-check-outlined mas-system-and-device--outlined" actionIcon="mas-x-outlined mas-math-and-finance--outlined"></mas-chip>
      </div>
      `
  })
}