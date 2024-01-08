import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { AlertWithDescrition } from './alert-example.component';
import { MasAlertModule } from 'projects/components/src/public-api';
const meta2: Meta<AlertWithDescrition> = {
  component: AlertWithDescrition,
  title: 'Components / Overlays / Alert',
  decorators: [
    moduleMetadata({
      declarations: [AlertWithDescrition],
      imports: [ MasAlertModule],
    }),
  ],
  render: (args: AlertWithDescrition) => ({
    props: {
      ...args,
    },
  }),
};

export default meta2;
type Story = StoryObj<AlertWithDescrition>;

export const AlertsWithDescrition: Story = {
  args: {},
};

