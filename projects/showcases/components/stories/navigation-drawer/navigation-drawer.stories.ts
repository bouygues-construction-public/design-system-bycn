import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {
  MasNavigationDrawerModule,
  MasNavigationDrawer,
  MasNavigationItemModule,
  MasButtonModule,
  MasSearchBarModule,
} from 'projects/components/src/public-api';

const meta: Meta<MasNavigationDrawer> = {
  component: MasNavigationDrawer,
  title: 'Components/Navigation/Navigation Drawer',
  // tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasNavigationDrawerModule, MasNavigationItemModule, MasButtonModule, MasSearchBarModule],
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
      <ng-template #headerComponent>
        <mas-search-bar placeholder="Search here..."></mas-search-bar>
      </ng-template>
      <mas-navigation-drawer [showDivider]="showDivider" [showLogo]="showLogo" [collapsed]="collapsed" [headerComponent]="headerComponent" [footerComponent]="footerComponent">
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
      <ng-template #footerComponent>
        <mas-button variant="primary" size="small" iconLeft="mas-plus-outlined mas-math-and-finance--outlined">Create</mas-button>
        <mas-button variant="secondary" size="small" iconLeft="mas-upload-simple-outlined mas-system-and-device--outlined">Export</mas-button>
      </ng-template>
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
export const WithHeaderComponent: Story = {
  args: {},
  render: (args: MasNavigationDrawer) => ({
    template: `
    <ng-template #headerComponent>
      <mas-search-bar placeholder="Search here..."></mas-search-bar>
    </ng-template>
    <mas-navigation-drawer [showDivider]="true" [showLogo]="true" [collapsed]="false" [headerComponent]="headerComponent">
      <mas-navigation-drawer-section heading="section heading">
        <mas-navigation-item label="Label 1"></mas-navigation-item>
        <mas-navigation-item label="Label 2"></mas-navigation-item>
        <mas-navigation-item label="Label 3"></mas-navigation-item>
      </mas-navigation-drawer-section>
    </mas-navigation-drawer>
    `
  })
};
export const WithFooterComponent: Story = {
  args: {},
  render: (args: MasNavigationDrawer) => ({
    template: `
    <mas-navigation-drawer [showDivider]="true" [showLogo]="true" [collapsed]="false" [footerComponent]="footerComponent">
      <mas-navigation-drawer-section heading="section heading">
        <mas-navigation-item label="Label 1"></mas-navigation-item>
        <mas-navigation-item label="Label 2"></mas-navigation-item>
        <mas-navigation-item label="Label 3"></mas-navigation-item>
      </mas-navigation-drawer-section>
    </mas-navigation-drawer>
    <ng-template #footerComponent>
      <mas-button variant="primary" size="small" iconLeft="mas-plus-outlined mas-math-and-finance--outlined">Create</mas-button>
      <mas-button variant="secondary" size="small" iconLeft="mas-upload-simple-outlined mas-system-and-device--outlined">Export</mas-button>
    </ng-template>
    `
  })
};

export const Collapsed: Story = {
  args: {},
  render: (args: MasNavigationDrawer) => ({
    template: `
    <mas-navigation-drawer [showDivider]="true" [showLogo]="true" [collapsed]="true">
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
    `
  })
};