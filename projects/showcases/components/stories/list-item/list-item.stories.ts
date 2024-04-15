import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormControl, Validator } from '@angular/forms';
import { MasListItem } from 'projects/components/src/lib/list-item/list-item.component';
import { MasListItemModule } from 'projects/components/src/lib/list-item/list-item.module';

const meta: Meta<MasListItem> = {
  component: MasListItem,
  title: 'Components/',
  // tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MasListItemModule],
    }),
  ],
  parameters: {
    componentSubtitle: '',
    docs: {
      description: {
        component: ``,
      },
    },
  },
  render: (args: MasListItem) => ({
    props: {
      ...args,
    },
    template: `
    <div>
    </div>
  `,
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<MasListItem>;

export const Basic: Story = {
  args: {
  },
};
export const Overview: Story = {
  render: (args: MasListItem) => ({
    template: `
      <div>
      </div>
    `,
  }),
};
