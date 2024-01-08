import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {  InfoAlertServiceExample } from './alert-example.component';
import { MasAlertModule } from 'projects/components/src/public-api';
const meta2: Meta<InfoAlertServiceExample> = {
  component: InfoAlertServiceExample,
  title: 'Components / Overlays / Alert',
  decorators: [
    moduleMetadata({
      declarations: [InfoAlertServiceExample],
      imports: [ MasAlertModule],
    }),
  ],
  render: (args: InfoAlertServiceExample) => ({
    props: {
      ...args,
    },
  }),
};

export default meta2;
type Story = StoryObj<InfoAlertServiceExample>;

export const InfoAlert: Story = {
  args: {},
};

