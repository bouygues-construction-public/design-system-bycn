import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MasAvatar } from 'projects/components/src/lib/avatar/avatar.component';
import { MasAvatarModule } from 'projects/components/src/lib/avatar/avatar.module';

const icons = [
  'mas-user-outlined mas-people--outlined mas-icon',
  'mas-user-circle-outlined mas-people--outlined mas-icon',
  'mas-user-circle-minus-outlined mas-people--outlined mas-icon',
  'mas-user-circle-gear-outlined mas-people--outlined mas-icon',
  'mas-user-switch-outlined mas-people--outlined mas-icon',
];

const Img: string =
  'https://img.freepik.com/photos-gratuite/vue-face-du-travailleur-lunettes-protection-casque_23-2148773446.jpg?w=740&t=st=1715947346~exp=1715947946~hmac=41e1d88d8811c420c08071b57590219e3d638eb053bc2c16c4e90d071152d39a';

const meta: Meta<MasAvatar> = {
  title: 'Components / Indicators / Avatar',
  component: MasAvatar,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasAvatarModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'The `Avatar` component represents an avatar with different variants (Avatar, Icon, initial) and sizes (x-small, small, medium, large).',
      },
    },
  },
  render: ({ ...args }) => ({
    props: args,
    template: `
            <mas-avatar
              [type]="type"
              [size]="size"
              [icon]="icon"
              [urlImg]="urlImg"
              [initial]="initial"
            ></mas-avatar>
    `,
  }),
  argTypes: {
    urlImg: {
      type: { name: 'string', required: false },
      description: 'The image of the Avatar',
      defaultValue: Img,
      control: 'text',
    },
    initial: {
      type: { name: 'string', required: false },
      description: 'The lettre intial of the Avatar',
      defaultValue: 'A',
      control: 'text',
    },

    type: {
      type: { name: 'string', required: false },
      description: 'The variant of the avatar',
      defaultValue: 'icon',
      control: 'select',
      options: ['image', 'icon', 'initial'],
    },
    size: {
      type: { name: 'string', required: false },
      description: 'The size of the avatar',
      defaultValue: 'medium',
      control: 'radio',
      options: ['x-small', 'small', 'medium', 'large'],
    },
    icon: {
      type: { name: 'string', required: false },
      description: 'The name of the icon.',
      defaultValue: 'mas-user-outlined mas-people--outlined mas-icon',
      control: 'select',
      options: ['', ...icons],
    },
  },
};

export default meta;
type Story = StoryObj<MasAvatar>;

/** Basic : A avatar with default settings */

export const Default: Story = {
  args: {
    type: 'icon',
    size: 'medium',
    icon: 'mas-user-outlined mas-people--outlined mas-icon',
    urlImg: Img,
    initial: 'A',
  },
};

export const ImageSize: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 20px;align-items: end">
        <mas-avatar type="image" size="x-small" urlImg="https://img.freepik.com/photos-gratuite/vue-face-du-travailleur-lunettes-protection-casque_23-2148773446.jpg?w=740&t=st=1715947346~exp=1715947946~hmac=41e1d88d8811c420c08071b57590219e3d638eb053bc2c16c4e90d071152d39a"></mas-avatar>
        <mas-avatar type="image" size="small" urlImg="https://img.freepik.com/photos-gratuite/vue-face-du-travailleur-lunettes-protection-casque_23-2148773446.jpg?w=740&t=st=1715947346~exp=1715947946~hmac=41e1d88d8811c420c08071b57590219e3d638eb053bc2c16c4e90d071152d39a"></mas-avatar>
        <mas-avatar type="image" size="medium" urlImg="https://img.freepik.com/photos-gratuite/vue-face-du-travailleur-lunettes-protection-casque_23-2148773446.jpg?w=740&t=st=1715947346~exp=1715947946~hmac=41e1d88d8811c420c08071b57590219e3d638eb053bc2c16c4e90d071152d39a"></mas-avatar>
        <mas-avatar type="image" size="large" urlImg="https://img.freepik.com/photos-gratuite/vue-face-du-travailleur-lunettes-protection-casque_23-2148773446.jpg?w=740&t=st=1715947346~exp=1715947946~hmac=41e1d88d8811c420c08071b57590219e3d638eb053bc2c16c4e90d071152d39a"></mas-avatar>
      </div>
    `,
  }),
};

export const IconSize: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 20px;align-items: end">
        <mas-avatar type="icon" size="x-small" icon="mas-user-outlined mas-people--outlined mas-icon"></mas-avatar>
        <mas-avatar type="icon" size="small" icon="mas-user-outlined mas-people--outlined mas-icon"></mas-avatar>
        <mas-avatar type="icon" size="medium" icon="mas-user-outlined mas-people--outlined mas-icon"></mas-avatar>
        <mas-avatar type="icon" size="large" icon="mas-user-outlined mas-people--outlined mas-icon"></mas-avatar>
      </div>

    `,
  }),
};