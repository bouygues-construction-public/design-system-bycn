import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { MasChip } from 'projects/components/src/lib/chip';

export default {
  title: 'Components/Chip',
  component: MasChip,
  decorators: [
    moduleMetadata({
      declarations: [MasChip],
      imports: [CommonModule],
    }),
  ],
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
    removable:true,
    onRemove: action('Chip removed'),
  },
});

export const Image = () => ({
  component: MasChip,
  props: {
    label: 'Input chip',
    removable:true,
    imageUrl:'/assets/img/chip-img.png',
    onRemove: action('Chip removed'),
  },
});