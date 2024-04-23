import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormControl, Validator } from '@angular/forms';
import { MasDataTable } from 'projects/components/src/lib/data-table/data-table.component';
import { MasDataTableModule } from 'projects/components/src/lib/data-table/data-table.module';
import { FormsModule } from '@angular/forms';

const meta: Meta<MasDataTable> = {
  component: MasDataTable,
  title: 'Components/',
  // tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, MasDataTableModule],
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
  render: (args: MasDataTable) => ({
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
type Story = StoryObj<MasDataTable>;

export const Basic: Story = {
  args: {},
};
export const Overview: Story = {
  render: (args: MasDataTable) => ({
    template: `
      <div>
      </div>
    `,
  }),
};
