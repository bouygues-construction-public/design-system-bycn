import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {  SuccessAlertServiceExample } from './alert-example.component';
import { MasAlertModule } from 'projects/components/src/public-api';
const meta: Meta<SuccessAlertServiceExample> = {
  component: SuccessAlertServiceExample,
  title: 'Components / Overlays / Alert',
  decorators: [
    moduleMetadata({
      declarations: [SuccessAlertServiceExample],
      imports: [ MasAlertModule],
    }),
  ],
  render: (args: SuccessAlertServiceExample) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<SuccessAlertServiceExample>;

export const SuccessAlert: Story = {
  args: {},
};

