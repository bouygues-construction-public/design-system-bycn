import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { MasChip } from 'projects/components/src/lib/chip';

export default {
  title: 'Components/Chip',
  tags: ['autodocs'],
  component: MasChip,
  decorators: [
    moduleMetadata({
      declarations: [MasChip],
      imports: [CommonModule],
    }),
  ],
  parameters: {
    componentSubtitle: 'Chips can display data or be used for short action',
    docs: {
      description: {
        component: ` 
        * When there are filter concepts on a list.
        * User queries to be filled in.
        * Potentially to tag content.`,
      },
    },
  },
  render: (args: MasChip) => ({
    props: {
      ...args
    }
  })
};

export const Default = () => ({
  component: MasChip,
  props: {
    label: 'Default',
  },
});

export const Removable = () => ({
  component: MasChip,
  props: {
    label: 'Input chip',
    removable: true,
    onRemove: action('Chip removed'),
  },
});

export const Image = () => ({
  component: MasChip,
  props: {
    label: 'Input chip',
    removable: true,
    imageUrl: '/assets/img/chip-img.png',
    onRemove: action('Chip removed'),
  },
});
