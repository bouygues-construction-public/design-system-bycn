import { Meta, Story, StoryObj, moduleMetadata } from "@storybook/angular";
import { MasTag } from "projects/components/src/lib/tag";  

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
      description: 'The label of the tag', 
      defaultValue: 'Text',
      control: 'text', 
    },
    size: {
      type: { name: 'string', required: false },
      description: 'The size of the tag. Available options: \'small\', \'medium\'. Default: \'medium\'', 
      defaultValue: 'medium',
      control: 'radio', 
      options: ['small', 'medium'],
    },
    leadingIcon: {
      type: { name: 'string', required: false },
      description: 'The name of the leading  icon to display on the left side of the tag.',
      defaultValue: '',
      control:'select',
      options: ['', ...icons],
    },
    color: {
      type: { name: 'string', required: false },
      description: 'The background color of the tag', 
      defaultValue: '',
      control:'select',
      options: ['', ...colors],
    },
  };
 

export default {
  title: 'Components / Indicators / Tags',
  component: MasTag,
  decorators: [
    moduleMetadata({
      declarations: [MasTag],
    }),
  ], 
  argTypes:argTypes,
  parameters: {
    docs: {
      description: {
        component: 'Tags are used to categorize, label and organize adjacent items using keywords to describe them.',
      },
    },
  },
} as Meta;

const Template: Story<MasTag> = (args: MasTag) => ({
  props: args,
  template: `
            <mas-tag
              [label]="label"
              [size]="size"
              [leadingIcon]="leadingIcon"
              [color]="color">
            </mas-tag>
            `,
});
 
/** Basic : A tag with default settings */

export const Default = Template.bind({});
Default.args = {
  label: 'Text',
  size: 'medium'
};


export const ShowcaseSizes = () => ({
  template: `
  <div style="display: flex; flex-wrap: wrap;">
       <mas-tag label="small" size="small"></mas-tag>
       <mas-tag label="medium" size="medium"></mas-tag>
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
           <mas-tag [label]="color" size="medium" [color]="color"></mas-tag>
        </ng-container>
      </div>
  `,
  props: {
    colors: colors,
  },
});
export const ShowcaseIcon = () => ({
  template: `
    <mas-tag label="Text" leadingIcon="mas-check-outlined mas-system-and-device--outlined"></mas-tag>
  `,
});
 
 

  
 