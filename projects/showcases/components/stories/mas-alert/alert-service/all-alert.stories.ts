import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { AllAlertServiceExample } from './alert-example.component';
import { MasAlertModule } from 'projects/components/src/public-api';
const meta2: Meta<AllAlertServiceExample> = {
  component: AllAlertServiceExample,
  title: 'Components / Overlays / Alert',
  decorators: [
    moduleMetadata({
      declarations: [AllAlertServiceExample],
      imports: [ MasAlertModule],
    }),
  ],
  render: (args: AllAlertServiceExample) => ({
    props: {
      ...args,
    },
  }),
};

export default meta2;
type Story = StoryObj<AllAlertServiceExample>;

export const AlertService: Story = {
  args: {},
};

