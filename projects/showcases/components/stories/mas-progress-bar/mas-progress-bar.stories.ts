import { Meta, Story, StoryObj, moduleMetadata } from "@storybook/angular"; 
import { MasProgressBar } from "projects/components/src/lib/progress-bar";
 
const argTypes = {
  
    type: {
      type: { name: 'string', required: false },
      description: 'The type of the progress bar', 
      defaultValue: 'default',
      control: 'select', 
      options: [
        'default',
        'inline',
      ],
    },
    size: {
      type: { name: 'string', required: false },
      description: 'Size of the progress bar: "small" or "large".', 
      defaultValue: 'large',
      control: 'radio', 
      options: ['small', 'large'],
    },
    state: {
      type: { name: 'string', required: false },
      description: 'State of the progress bar: "active", "success", or "error".',
      defaultValue: 'active',
      control: 'select', 
      options: [
        'active',
        'success',
        'error',
      ],
    },
    value: {
      type: { name: 'number', required: false },
      description: 'Current progress value (percentage).', 
      control:'number', 
    },
    label: {
      control: 'text',
      description: 'Label displayed above the progress bar.',
    },
    helper: {
      control: 'text',
      description: 'Helper text displayed below the progress bar (optional).',
    }
  };
 

export default {
  title: 'Components / Indicators / Progress bar',
  component: MasProgressBar,
  decorators: [
    moduleMetadata({
      declarations: [MasProgressBar],
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

const Template: Story<MasProgressBar> = (args: MasProgressBar) => ({
  props: args,
  template: `
            <mas-progress-bar
              [type]="type"
              [size]="size"
              [value]="value"
              [state]="state"
              [label]="label"
              [helper]="helper">
            </mas-progress-bar>
            `,
});
 
/** Basic : A ProgressBar with default settings */

export const Default = Template.bind({});
Default.args = {
  type:"default",
  size:"large",
  value:50,
  state:"active",
  label:"Progress",
  helper:"Helper"
};

export const ShowcaseType = () => ({
  template: `
  <div>
      <mas-progress-bar
      type="inline"
      size="large"
      value="50"
      state="active"
      label="Inline">
    </mas-progress-bar>
    <br/>
    <mas-progress-bar
      type="default"
      size="large"
      value="50"
      state="active"
      label="Default"
      helper="helper">
    </mas-progress-bar>
  </div>
  `
});

export const ShowcaseStates = () => ({
  template: `
  <div>
      <mas-progress-bar
      type="default"
      size="large"
      value="50"
      state="active"
      label="active Progress bar">
    </mas-progress-bar>
    <br/>
    <mas-progress-bar
      type="default"
      size="large"
      value="100"
      state="success"
      label="success Progress bar">
    </mas-progress-bar>
    <br/>
    <mas-progress-bar
      type="default"
      size="large"
      value="100"
      state="error"
      label="Error Progress bar">
    </mas-progress-bar>
  </div>
  `
});

export const ShowcaseSizes = () => ({
  template: `
  <div>
      <mas-progress-bar
      type="default"
      size="small"
      value="50"
      state="active"
      label="Small Progress bar"
      helper="helper">
    </mas-progress-bar>
    <br/>
    <mas-progress-bar
      type="default"
      size="large"
      value="50"
      state="active"
      label="Large Progress bar"
      helper="helper">
    </mas-progress-bar>
  </div>
  `
});

   
 

  
 