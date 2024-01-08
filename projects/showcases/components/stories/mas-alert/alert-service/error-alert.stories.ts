import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {  ErrorAlertServiceExample } from './alert-example.component';
import { MasAlertModule } from 'projects/components/src/public-api';
const meta2: Meta<ErrorAlertServiceExample> = {
  component: ErrorAlertServiceExample,
  title: 'Components / Overlays / Alert',
  decorators: [
    moduleMetadata({
      declarations: [ErrorAlertServiceExample],
      imports: [ MasAlertModule],
    }),
  ],
  render: (args: ErrorAlertServiceExample) => ({
    props: {
      ...args,
    },
  }),
};

export default meta2;
type Story = StoryObj<ErrorAlertServiceExample>;

export const ErrorAlert: Story = {
  args: {},
};

