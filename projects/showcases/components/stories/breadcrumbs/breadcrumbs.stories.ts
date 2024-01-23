import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MasBreadcrumb } from 'projects/components/src/lib/breadcrumbs/breadcrumbs.component';
import { MasBreadcrumbItem } from 'projects/components/src/lib/breadcrumbs/breadcrumb-item.component';
import { MasBreadcrumbModule } from 'projects/components/src/lib/breadcrumbs/breadcrumbs.module';

const meta: Meta<MasBreadcrumb> = {
  component: MasBreadcrumb,
  subcomponents: {MasBreadcrumbItem},
  argTypes: {},
  // tags: ['autodocs'],
  title: 'Components/Navigation/Breadcrumbs',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasBreadcrumbModule],
    }),
  ],
  parameters: {
    componentSubtitle: '',
    docs: {
      description: {
        component: ``,
      },
    },
  },
  render: (args: MasBreadcrumb) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<MasBreadcrumb>;

export const Overview: Story = {
  render: (args: MasBreadcrumb) => ({
    template: `
    <mas-breadcrumbs [threshold]="threshold">
      <mas-breadcrumb-item href="/#" content="Accueil"/>
      <mas-breadcrumb-item href="/#" content="Gestion des utilisateurs"/>
      <mas-breadcrumb-item href="/#" content="EUDE Valerie"/>
    </mas-breadcrumbs>
      `,
  }),
  args: {},
  argTypes: {
    threshold: {
      type: {
        name: 'number',
        required: false,
      },
      description: ''
    },
  },
};

export const Collapse: Story = {
  render: (args: MasBreadcrumb) => ({
    template: `
    <mas-breadcrumbs>
      <mas-breadcrumb-item href="/#" content="Acces and delegation"/>
      <mas-breadcrumb-item href="/#" content="Manage users"/>
      <mas-breadcrumb-item href="/#" content="User sheet"/>
      <mas-breadcrumb-item href="/#" content="User #1"/>
      <mas-breadcrumb-item href="/#" content="Edit user"/>
    </mas-breadcrumbs>
    `,
  }),
};
