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
          'The `Avatar` component represents an avatar with different variants (Avatar, Icon, Initial) and sizes (XS, S, M, L).',
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
              [UrlImg]="UrlImg"
              [Initial]="Initial"
            ></mas-avatar>
    `,
  }),
  argTypes: {
    UrlImg: {
      type: { name: 'string', required: false },
      description: 'The image of the Avatar',
      defaultValue: Img,
      control: 'text',
    },
    Initial: {
      type: { name: 'string', required: false },
      description: 'The lettre intial of the Avatar',
      defaultValue: 'A',
      control: 'text',
    },

    type: {
      type: { name: 'string', required: false },
      description: 'The variant of the avatar',
      defaultValue: 'Icon',
      control: 'select',
      options: ['Image', 'Icon', 'Initial'],
    },
    size: {
      type: { name: 'string', required: false },
      description: 'The size of the avatar',
      defaultValue: 'M',
      control: 'radio',
      options: ['XS', 'S', 'M', 'L'],
    },
    icon: {
      type: { name: 'string', required: false },
      description: 'The name of the icon .',
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
    type: 'Icon',
    size: 'M',
    icon: 'mas-user-outlined mas-people--outlined mas-icon',
    UrlImg: Img,
    Initial: 'A',
  },
};

export const ImageSize: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 20px;align-items: end">
        <mas-avatar type="Image" size="XS" UrlImg="https://img.freepik.com/photos-gratuite/vue-face-du-travailleur-lunettes-protection-casque_23-2148773446.jpg?w=740&t=st=1715947346~exp=1715947946~hmac=41e1d88d8811c420c08071b57590219e3d638eb053bc2c16c4e90d071152d39a"></mas-avatar>
        <mas-avatar type="Image" size="S" UrlImg="https://img.freepik.com/photos-gratuite/vue-face-du-travailleur-lunettes-protection-casque_23-2148773446.jpg?w=740&t=st=1715947346~exp=1715947946~hmac=41e1d88d8811c420c08071b57590219e3d638eb053bc2c16c4e90d071152d39a"></mas-avatar>
        <mas-avatar type="Image" size="M" UrlImg="https://img.freepik.com/photos-gratuite/vue-face-du-travailleur-lunettes-protection-casque_23-2148773446.jpg?w=740&t=st=1715947346~exp=1715947946~hmac=41e1d88d8811c420c08071b57590219e3d638eb053bc2c16c4e90d071152d39a"></mas-avatar>
        <mas-avatar type="Image" size="L" UrlImg="https://img.freepik.com/photos-gratuite/vue-face-du-travailleur-lunettes-protection-casque_23-2148773446.jpg?w=740&t=st=1715947346~exp=1715947946~hmac=41e1d88d8811c420c08071b57590219e3d638eb053bc2c16c4e90d071152d39a"></mas-avatar>
      </div>
    `,
  }),
};

export const IconSize: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 20px;align-items: end">
        <mas-avatar type="Icon" size="XS" icon="mas-user-outlined mas-people--outlined mas-icon"></mas-avatar>
        <mas-avatar type="Icon" size="S" icon="mas-user-outlined mas-people--outlined mas-icon"></mas-avatar>
        <mas-avatar type="Icon" size="M" icon="mas-user-outlined mas-people--outlined mas-icon"></mas-avatar>
        <mas-avatar type="Icon" size="L" icon="mas-user-outlined mas-people--outlined mas-icon"></mas-avatar>
      </div>

    `,
  }),
};

export const Type: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 20px; align-items: end">
        <mas-avatar type="Initial" size="XS" Initial="A"></mas-avatar>
        <mas-avatar type="Initial" size="S" Initial="A"></mas-avatar>
        <mas-avatar type="Initial" size="M" Initial="A"></mas-avatar>
        <mas-avatar type="Initial" size="L" Initial="A"></mas-avatar>
      </div>
    `,
  }),
};
