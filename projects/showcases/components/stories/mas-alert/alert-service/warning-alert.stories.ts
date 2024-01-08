import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {  WarningAlertServiceExample } from './alert-example.component';
import { MasAlertModule } from 'projects/components/src/public-api';
const meta2: Meta<WarningAlertServiceExample> = {
  component: WarningAlertServiceExample,
  title: 'Components / Overlays / Alert',
  decorators: [
    moduleMetadata({
      declarations: [WarningAlertServiceExample],
      imports: [ MasAlertModule],
    }),
  ],
  render: (args: WarningAlertServiceExample) => ({
    props: {
      ...args,
    },
  }),
};

export default meta2;
type Story = StoryObj<WarningAlertServiceExample>;

export const WarningAlert: Story = {
  args: {},
};

