import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {
  MasNavigationDrawerModule,
  MasNavigationDrawer,
  MasNavigationItemModule,
} from 'projects/components/src/public-api';

const meta: Meta<MasNavigationDrawer> = {
  component: MasNavigationDrawer,
  title: 'Components/Navigation/Navigation Drawer',
  // tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasNavigationDrawerModule, MasNavigationItemModule],
    }),
  ],
  parameters: {
    componentSubtitle: '',
    docs: {
      description: {
        component: ` 
        `,
      },
    },
  },
  render: (args: MasNavigationDrawer) => ({
    props: {
      ...args,
    },
    template: `
      <mas-navigation-drawer [showDivider]="showDivider" [showLogo]="showLogo" [collapsed]="collapsed">
        <mas-navigation-drawer-section heading="section heading">
          <mas-navigation-item label="Label 1"></mas-navigation-item>
          <mas-navigation-item label="Label 2"></mas-navigation-item>
          <mas-navigation-item label="Label 3"></mas-navigation-item>
        </mas-navigation-drawer-section>
        <mas-navigation-drawer-section heading="section heading">
        <mas-navigation-item label="Label 1"></mas-navigation-item>
        <mas-navigation-item label="Label 2"></mas-navigation-item>
        <mas-navigation-item label="Label 3"></mas-navigation-item>
      </mas-navigation-drawer-section>
      </mas-navigation-drawer>
    `,
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<MasNavigationDrawer>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Basic: Story = {
  args: {
    showDivider: true,
    showLogo: true,
    collapsed: false,
  },
};
