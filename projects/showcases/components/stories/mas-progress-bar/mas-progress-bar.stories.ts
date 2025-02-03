import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MasLinearProgressBar } from 'projects/components/src/lib/linear-progress-bar';

const argTypes = {
  type: {
    type: { name: 'string', required: false },
    description: 'The type of the progress bar',
    defaultValue: 'default',
    control: 'select',
    options: ['default', 'inline'],
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
    options: ['active', 'success', 'error'],
  },
  value: {
    type: { name: 'number', required: false },
    description: 'Current progress value (percentage).',
    control: 'number',
  },
  label: {
    control: 'text',
    description: 'Label displayed above the progress bar.',
  },
  helper: {
    control: 'text',
    description: 'Helper text displayed below the progress bar (optional).',
  },
};

export default {
  title: 'Components / Indicators / Linear Progress bar',
  component: MasLinearProgressBar,
  decorators: [
    moduleMetadata({
      declarations: [MasLinearProgressBar],
    }),
  ],
  argTypes: argTypes,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  render: ({ ...args }) => ({
    props: args,
    template: `
    <mas-linear-progress-bar
      [type]="type"
      [size]="size"
      [value]="value"
      [state]="state"
      [label]="label"
      [helper]="helper">
    </mas-linear-progress-bar>
    `,
  }),
} as Meta;

/** Basic : A ProgressBar with default settings */

export const Default: StoryObj<MasLinearProgressBar> = {};
Default.args = {
  type: 'default',
  size: 'medium',
  value: 50,
  state: 'active',
  label: 'Progress',
  helper: 'Helper',
};

export const ShowcaseType = () => ({
  template: `
  <div>
      <mas-linear-progress-bar
      type="inline"
      size="medium"
      value="50"
      state="active"
      label="Inline">
    </mas-linear-progress-bar>
    <br/>
    <mas-linear-progress-bar
      type="default"
      size="medium"
      value="50"
      state="active"
      label="Default"
      helper="helper">
    </mas-linear-progress-bar>
  </div>
  `,
});

export const ShowcaseStates = () => ({
  template: `
  <div>
      <mas-linear-progress-bar
      type="default"
      size="medium"
      value="50"
      state="active"
      label="active Progress bar">
    </mas-linear-progress-bar>
    <br/>
    <mas-linear-progress-bar
      type="default"
      size="medium"
      value="100"
      state="success"
      label="success Progress bar">
    </mas-linear-progress-bar>
    <br/>
    <mas-linear-progress-bar
      type="default"
      size="medium"
      value="100"
      state="error"
      label="Error Progress bar">
    </mas-linear-progress-bar>
  </div>
  `,
});

export const ShowcaseSizes = () => ({
  template: `
  <div>
      <mas-linear-progress-bar
      type="default"
      size="small"
      value="50"
      state="active"
      label="Small Progress bar"
      helper="helper">
    </mas-linear-progress-bar>
    <br/>
    <mas-linear-progress-bar
      type="default"
      size="medium"
      value="50"
      state="active"
      label="Large Progress bar"
      helper="helper">
    </mas-linear-progress-bar>
  </div>
  `,
});
