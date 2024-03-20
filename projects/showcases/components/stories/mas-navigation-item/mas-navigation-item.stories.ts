import { Meta, Story, StoryObj, moduleMetadata } from "@storybook/angular";
import { MasNavigationItem } from "projects/components/src/lib/navigation-item";  

const icons = ['mas-circle-filled mas-design--filled',
                'mas-house-outlined mas-maps-and-travel--outlined',
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
                'mas-currency-btc-outlined mas-commerce--outlined']
const argTypes = {
  iconItem: {
      type: { name: 'string', required: false },
      description: 'The name of the icon to display on the left side of the navigation item.',
      defaultValue: false,
      control:'select',
      options: ['', ...icons],
    },
    label: {
      type: { name: 'string', required: false },
      description: 'The label of the navigation item', 
      control: 'text', 
    },
    selected: {
      type: { name: 'boolean', required: false },
      description: 'Whether the navigation Item is selected. Default: false',
      defaultValue: false,
      control:'boolean', 
    },
    disabled: {
      type: { name: 'boolean', required: false },
      description: 'Whether the navigation Item should be disabled. Default: false',
      defaultValue: false,
      control:'boolean', 
    },
    collapsed: {
      type: { name: 'boolean', required: false },
      description: 'Whether the navigation menu is collapsed. Default: false',
      defaultValue: false,
      control:'boolean', 
    },
    submenu: {
      type: { name: 'boolean', required: false },
      description: 'Whether the navigation item has submenu. Default: false',
      defaultValue: false,
      control:'boolean', 
    },
    submenuIcon: {
      type: { name: 'string', required: false },
      description: 'The name of the icon to display on the right side of the navigation item.',
      defaultValue: false,
      control:'select',
      options: ['', ...icons],
    },
    badge: {
      type: { name: 'boolean', required: false },
      description: 'display notification about the navigation item',
      control:'text', 
    },
    
  };
 

export default {
  title: 'Components / Navigations / Navigation Item',
  component: MasNavigationItem,
  decorators: [
    moduleMetadata({
      declarations: [MasNavigationItem],
    }),
  ], 
  argTypes:argTypes,
  parameters: {
    docs: {
      description: {
        component: 'Buttons serve as navigational elements and can be used independently or inline with text. They offer a lightweight option for navigation.',
      },
    },
  },
} as Meta;

const Template: Story<MasNavigationItem> = (args: MasNavigationItem) => ({
  props: args,
  template: `
            <mas-navigation-item
              [iconItem]="iconItem" 
              [label]="label" 
              [disabled]="disabled" 
              [selected]="selected"
              [collapsed]="collapsed"
              [submenu]="submenu"
              [submenuIcon]="submenuIcon"
              [badgeContent]="badgeContent">
            </mas-navigation-item>
            `,
});
 
/** Basic : A button with default settings */

export const Default = Template.bind({});

Default.args = {
  iconItem: 'mas-house-outlined mas-maps-and-travel--outlined' ,
  label: 'Dashboard' ,
  disabled : false  , 
  selected : false  , 
  collapsed : false  , 
  submenu : false  , 
  submenuIcon : ''  , 
  badgeContent : ''  , 

};
export const Single = () => ({
  template: `
  <mas-navigation-item
    [label]="'Dashboard'">
  </mas-navigation-item>
  `,
});
export const Submenu = () => ({
  template: `
  <mas-navigation-item
    [label]="'Dashboard'" 
    [submenu]="true">
  </mas-navigation-item>
  `,
});

export const Collapsed = () => ({
  template: `
 <mas-navigation-item
    [label]="'Dashboard'" 
    [iconItem]="'mas-house-outlined mas-maps-and-travel--outlined'"
    [collapsed]="true">
</mas-navigation-item>
  `,
});

export const CollapsedWithBadge = () => ({
  template: `
 <mas-navigation-item
    [label]="'Dashboard'" 
    [iconItem]="'mas-house-outlined mas-maps-and-travel--outlined'"
    [collapsed]="true"
    [badgeContent]="99">
</mas-navigation-item>
  `,
});

export const Selected = () => ({
  template: `
 <mas-navigation-item
              [label]="'Dashboard'" 
              [iconItem]="'mas-house-outlined mas-maps-and-travel--outlined'"
              [selected] = "true"
              >
</mas-navigation-item>
  `,
});

export const disabled = () => ({
  template: `
 <mas-navigation-item
              [label]="'Dashboard'" 
              [iconItem]="'mas-house-outlined mas-maps-and-travel--outlined'"
              [disabled]= "true"
              >
</mas-navigation-item>
  `,
});

export const withBadge = () => ({
  template: `
 <mas-navigation-item
              [label]="'Dashboard'" 
              [iconItem]="'mas-house-outlined mas-maps-and-travel--outlined'"
              [badgeContent]="99"
              >
</mas-navigation-item>
  `,
});
export const withoutBadge = () => ({
  template: `
 <mas-navigation-item
              [label]="'Dashboard'" 
              [iconItem]="'mas-house-outlined mas-maps-and-travel--outlined'"
      
              >
</mas-navigation-item>
  `,
});


  
 