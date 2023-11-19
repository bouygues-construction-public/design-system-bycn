import { Meta, Story, StoryObj, moduleMetadata } from "@storybook/angular";
import { CircularProgressBar } from "projects/components/src/lib/circular-progress-bar";

const states = [
  'loading', 'success', 'error'
]


const argTypes = {

  state: {
    type: { name: 'string', required: true },
    description: 'The state of the circular progress bar. Available options: \'loading\', \'success\', \'error\'.',
    defaultValue: 'loading',
    control: 'radio',
    options: ['loading', 'success', 'error'],
  },
  loadingText: {
    type: { name: 'string', required: false },
    description: 'The text description for the loading state.',
    defaultValue: '',
    control: 'text',
  },
  successText: {
    type: { name: 'string', required: false },
    description: 'The text description for the success state.',
    defaultValue: '',
    control: 'text',
  },
  errorText: {
    type: { name: 'string', required: false },
    description: 'The text description for the error state.',
    defaultValue: '',
    control: 'text',
  },

};

export default {
  title: 'Components / Indicators / Circular Progress Bar',
  component: CircularProgressBar,
  decorators: [
    moduleMetadata({
      declarations: [CircularProgressBar],
    }),
  ],
  argTypes: argTypes,
  parameters: {
    docs: {
      description: {
        component: 'desc.',
      },
    },
  },
} as Meta;

const Template: Story<CircularProgressBar> = (args: CircularProgressBar) => ({
  props: args,
  template: `
            <circular-progress-bar
              [state]="state"
              [loadingText]="loadingText"
              [successText]="successText"
              [errorText]="errorText">
            </circular-progress-bar>
            `,
});


/** Basic : A Circular Progress Bar with default settings */

export const Default = Template.bind({});
Default.args = {
  state: 'loading',
  loadingText: '',
  successText: '',
  errorText: '',
};

export const States = () => ({
  template: `
  <circular-progress-bar
    [state]="'loading'">
  </circular-progress-bar>

  <circular-progress-bar
    [state]="'success'">
  </circular-progress-bar>

  <circular-progress-bar
    [state]="'error'">
  </circular-progress-bar>
  `
});


const Template2: Story<CircularProgressBar> = (args: CircularProgressBar) => ({
  props: args,
  template: `
            <circular-progress-bar
              [state]="state"
              [loadingText]="loadingText"
              [successText]="successText"
              [errorText]="errorText">
            </circular-progress-bar>
            `,
});

export const WithLabel = () => ({
  template: `
  <circular-progress-bar
    [state]="'loading'"
    [loadingText]="'Label'"
    [successText]="'Label'"
    [errorText]="'Label'">
  </circular-progress-bar>

  <circular-progress-bar
    [state]="'success'"
    [loadingText]="'Label'"
    [successText]="'Label'"
    [errorText]="'Label'">
  </circular-progress-bar>

  <circular-progress-bar
    [state]="'error'"
    [loadingText]="'Label'"
    [successText]="'Label'"
    [errorText]="'Label'">
</circular-progress-bar>
  `
});








