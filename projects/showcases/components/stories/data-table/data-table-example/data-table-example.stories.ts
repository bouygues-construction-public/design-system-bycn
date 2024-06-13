import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { DataTableExample } from './data-table-example.component';
import { MasDataTableModule } from 'projects/components/src/lib/data-table/data-table.module';
import { ReactiveFormsModule } from '@angular/forms';
const meta: Meta<DataTableExample> = {
  component: DataTableExample,
  title: 'Components/Structure/Data Table',
  decorators: [
    moduleMetadata({
      declarations: [DataTableExample],
      imports: [
        CommonModule,
        MasDataTableModule,
        ReactiveFormsModule,
      ],
    }),
  ],
  render: (args: DataTableExample) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<DataTableExample>;

export const CellTypes: Story = {
  args: {},
};
