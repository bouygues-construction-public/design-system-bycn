import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MasInlineLoading } from 'projects/components/src/lib/inline-loading';

const argTypes = {
  state: {
    type: { name: 'string', required: true },
    description: "The state of the circular progress bar. Available options: 'active', 'success', 'error'.",
    defaultValue: 'loading',
    control: 'radio',
    options: ['active', 'success', 'error'],
  },
  activeText: {
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
  title: 'Components / Indicators / Inline Loading',
  component: MasInlineLoading,
  decorators: [
    moduleMetadata({
      declarations: [MasInlineLoading],
    }),
  ],
  render: ({ ...args }) => ({
    template: `
            <mas-inline-loading
              [state]="state"
              [loadingText]="loadingText"
              [successText]="successText"
              [errorText]="errorText">
            </mas-inline-loading>
    `,
    props: {
      state: 'active',
      activeText: 'loading...',
      successText: 'success!',
      errorText: 'something went wrong.'
    },
  }),
  argTypes: argTypes,
  parameters: {
    docs: {
      description: {
        component: 'desc.',
      },
    },
  },
} as Meta;

/** Basic : A Circular Progress Bar with default settings */

export const Default: StoryObj<MasInlineLoading> = {};
Default.args = {
  state: 'active',
  activeText: '',
  successText: '',
  errorText: '',
};

export const States = () => ({
  template: `
  <mas-inline-loading
    [state]="'loading'">
  </mas-inline-loading>

  <mas-inline-loading
    [state]="'success'">
  </mas-inline-loading>

  <mas-inline-loading
    [state]="'error'">
  </mas-inline-loading>
  `,
});

export const WithLabel = () => ({
  template: `
  <mas-inline-loading
    [state]="'loading'"
    [loadingText]="'Label'"
    [successText]="'Label'"
    [errorText]="'Label'">
  </mas-inline-loading>

  <mas-inline-loading
    [state]="'success'"
    [loadingText]="'Label'"
    [successText]="'Label'"
    [errorText]="'Label'">
  </mas-inline-loading>

  <mas-inline-loading
    [state]="'error'"
    [loadingText]="'Label'"
    [successText]="'Label'"
    [errorText]="'Label'">
</mas-inline-loading>
  `,
});
