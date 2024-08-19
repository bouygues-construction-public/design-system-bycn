import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ActionButtonToastServiceExample } from './alert-example.component';
import {  MasToastModule } from 'projects/components/src/public-api';
const meta: Meta<ActionButtonToastServiceExample> = {
  component: ActionButtonToastServiceExample,
  title: 'Components / Overlays / Toast',
  decorators: [
    moduleMetadata({
      declarations: [ActionButtonToastServiceExample],
      imports: [ MasToastModule],
    }),
  ],
  render: ({...args}) => ({
    template: `
      <div style="height: 300px">
        <action-button-toast-sevice-example></action-button-toast-sevice-example>
      </div>
    `,
    props: args
  }),
};

export default meta;
type Story = StoryObj<ActionButtonToastServiceExample>;

export const ToastWithActionButton: Story = {
  args: {},
};

