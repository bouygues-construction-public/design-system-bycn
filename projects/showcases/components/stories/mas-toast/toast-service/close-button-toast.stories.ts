import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CloseButtonToastServiceExample } from './alert-example.component';
import {  MasToastModule } from 'projects/components/src/public-api';
const meta: Meta<CloseButtonToastServiceExample> = {
  component: CloseButtonToastServiceExample,
  title: 'Components / Overlays / Toast',
  decorators: [
    moduleMetadata({
      declarations: [CloseButtonToastServiceExample],
      imports: [ MasToastModule],
    }),
  ],
  render: (args: CloseButtonToastServiceExample) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<CloseButtonToastServiceExample>;

export const ToastWithCloseButton: Story = {
  args: {},
};

