import { Meta, Story, StoryObj, moduleMetadata } from "@storybook/angular";
import { MasTab } from "projects/components/src/lib/tab";  

const icons = ['mas-arrow-arc-left-outlined mas-arrows--outlined',
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
const colors = ['orange', 'amber', 'green', 'teal', 'blue', 'purple', 'red', 'roc']
const argTypes = {
  
    label: {
      type: { name: 'string', required: false },
      description: 'The label of the tab', 
      defaultValue: 'Text',
      control: 'text', 
    },
    size: {
      type: { name: 'string', required: false },
      description: 'The size of the tab. Available options: \'medium\', \'large\'. Default: \'medium\'', 
      defaultValue: 'medium',
      control: 'radio', 
      options: ['medium', 'large'],
    },
    leadingIcon: {
      type: { name: 'string', required: false },
      description: 'The name of the leading  icon to display on the left side of the tab.',
      defaultValue: '',
      control:'select',
      options: ['', ...icons],
    },
    number: {
      type: { name: 'number', required: false },
      description: '',
      defaultValue: '0',
      control: 'number',
    }
  };
 

export default {
  title: 'Components / Navigation / Tabs',
  component: MasTab,
  decorators: [
    moduleMetadata({
      declarations: [MasTab],
    }),
  ], 
  argTypes:argTypes,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
} as Meta;

const Template: Story<MasTab> = (args: MasTab) => ({
  props: args,
  template: `
            <mas-tab
              [size]="size"
              [leadingIcon]="leadingIcon"
              [number]="number">{{label}}
            </mas-tab>
            `,
});
 
/** Basic : A tab with default settings */

export const Default = Template.bind({});
Default.args = {
  label: 'Text',
  size: 'medium'
};


export const ShowcaseSizes = () => ({
  template: `
  <div style="display: flex; flex-wrap: wrap;">
       <mas-tab size="M">{{label}}</mas-tab>
       <mas-tab label="L" size="medium">{{label}}</mas-tab>
  </div>
  `,
  props: {
    colors: colors,
  },
});
export const ShowcaseColors = () => ({
  template: `
      <div style="display: flex; flex-wrap: wrap;">
        <ng-container *ngFor="let color of colors">
           <mas-tab size="M" ></mas-tab>
        </ng-container>
      </div>
  `,
  props: {
    colors: colors,
  },
});
export const ShowcaseBadge = () => ({
  template: `
      <div style="display: flex; flex-wrap: wrap;">
        <mas-tab size="M" [number]="10"></mas-tab>
      </div>
  `,
  props: {
    colors: colors,
  },
});
export const ShowcaseOrientation = () => ({
  template: `
      <div style="display: flex; flex-wrap: wrap;">
        <mas-tab size="M" orientation=""></mas-tab>
        <mas-tab size="M" orientation=""></mas-tab>
      </div>
  `,
  props: {
    colors: colors,
  },
});
export const ShowcaseIcon = () => ({
  template: `
    <mas-tab leadingIcon="mas-check-outlined mas-system-and-device--outlined">Leading Icon</mas-tab>
  `,
});
 
 

  
 