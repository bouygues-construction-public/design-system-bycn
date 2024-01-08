import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { AlertWithClosebtn } from './alert-example.component';
import { MasAlertModule } from 'projects/components/src/public-api';
const meta2: Meta<AlertWithClosebtn> = {
  component: AlertWithClosebtn,
  title: 'Components / Overlays / Alert',
  decorators: [
    moduleMetadata({
      declarations: [AlertWithClosebtn],
      imports: [ MasAlertModule],
    }),
  ],
  render: (args: AlertWithClosebtn) => ({
    props: {
      ...args,
    },
  }),
};

export default meta2;
type Story = StoryObj<AlertWithClosebtn>;

export const AlertWithCloseButton: Story = {
  args: {},
};

