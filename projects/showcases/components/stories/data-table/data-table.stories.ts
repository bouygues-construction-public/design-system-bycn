import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MasDataTable } from 'projects/components/src/lib/data-table/data-table.component';
import { MasDataTableModule } from 'projects/components/src/lib/data-table/data-table.module';
import { FormsModule } from '@angular/forms';
import { CellType } from 'projects/components/src/lib/data-table/data-table.model';

const meta: Meta<MasDataTable> = {
  component: MasDataTable,
  title: 'Components/ Structure/ Data Table',
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
  render: (args) => ({
    props: {
      ...args,
    },
    template: `
    <div style="height: 300px">
      <mas-data-table [value]="value" [columns]="columns" [totalRecords]="value.length"></mas-data-table>
    </div>
  `,
  }),
  argTypes: {
    value: {
      description: 'An array of objects to display',
    },
    columns: {
      description: 'Displays a loader to indicate data load is in progress',
    },
    totalRecords: {
      description: 'Number of total records, defaults to length of value when not defined',
      type: 'number',
    },
    loading: {
      description: 'Displays a loader to indicate data load is in progress',
      type: 'boolean',
    },
    loadingIcon: {
      description: 'The icon to show while indicating data load is in progress',
      type: 'string',
    },
    showLoader: {
      description: 'Whether to show the loading mask when loading property is true',
      type: 'boolean',
      defaultValue: true,
    },
    sortField: {
      description: 'Name of the field to sort data by default',
    },
    sortOrder: {
      description: 'Order to sort when default sorting is enabled',
      type: 'number',
    },
    selection: {
      description: 'Selected row in single mode or an array of values in multiple mode',
      type: 'string',
    },
    selectAll: {
      description: 'Whether all data is selected',
      type: 'boolean',
    },
    footerTemplate: {
      description: 'Set footer template to customize what is displayed in the tfoot section of the table',
    },
    bodyTemplate: {
      description: 'Set body template to customize what is displayed in the tfoot section of the table',
    },
    headerTemplate: {
      description: 'Set header template to customize what is displayed in the tfoot section of the table',
    },
    rows: {
      description: 'Number of rows to display per page',
      type: 'number',
    },
    customSort: {
      description: 'Whether to use the default sorting or a custom one using sortFunction',
      type: 'boolean',
    },
    selectionMode: {
      description: 'Specifies the selection mode, valid values are "single" and "multiple"',
      options: ['single', 'multiple'],
    },
    sortFunction: {
      description: 'A function to implement custom sorting, refer to sorting section for details',
      type: 'function',
    },
    selectAllChange: {
      description: 'Emits when the all of the items selected or unselected',
      action: 'onSelectAll',
    },
    selectionChange: {
      description: 'Callback to invoke on selection changed',
      action: 'onSelectChange',
    },
    sort: {
      description: 'Callback to invoke when a column gets sorted',
      action: 'onSort',
    },
  },
};

export default meta;
type Story = StoryObj<MasDataTable>;

export const Basic: Story = {
  args: {
    value: [
      {
        code: { text: 1 },
        name: {
          trailingIcon: 'mas-seal-warning-outlined mas-security-and-warnings--outlined',
          text: 'Bamboo Watch',
          leadingIcon: 'mas-seal-question-outlined mas-security-and-warnings--outlined',
        },
        category: { text: 'Accessories' },
      },
      {
        code: { text: 4 },
        name: { text: 'Black Watch' },
        category: {
          text: 'Accessories',
          leadingIcon: 'mas-seal-question-outlined mas-security-and-warnings--outlined',
        },
      },
      {
        code: { text: 3 },
        name: { text: 'Blue Band', leadingIcon: 'mas-seal-question-outlined mas-security-and-warnings--outlined' },
        category: { text: 'Fitness', leadingIcon: 'mas-seal-question-outlined mas-security-and-warnings--outlined' },
      },
      {
        code: 2,
        name: { text: 'Blue T-Shirt', leadingIcon: 'mas-seal-question-outlined mas-security-and-warnings--outlined' },
        category: { text: 'Clothing', leadingIcon: 'mas-seal-question-outlined mas-security-and-warnings--outlined' },
      },
    ],
    columns: [
      {
        field: 'code',
        leadingIcon: 'mas-seal-question-outlined mas-security-and-warnings--outlined',
        header: 'Code',
        sortable: true,
        cellType: CellType.TEXT,
      },
      {
        field: 'name',
        header: 'Name',
        sortable: true,
        width: '200px',
        cellType: CellType.TEXT,
      },
      {
        field: 'category',
        header: 'Category',
        sortable: true,
        width: '200px',
        cellType: CellType.TEXT,
      },
    ],
  },
};

export const SingleSelection: Story = {
  render: (args) => ({
    props: { ...args },
    template: `
    <div style="height: 300px">
      <mas-data-table selectionMode="single" [value]="value" [columns]="columns" [totalRecords]="value.length">
      </mas-data-table>
    </div>
    `,
  }),
  args: {
    value: [
      {
        code: 1,
        name: 'Bamboo Watch',
        category: 'Accessories',
      },
      {
        code: 4,
        name: 'Black Watch',
        category: 'Accessories',
      },
      {
        code: 3,
        name: 'Blue Band',
        category: 'Fitness',
      },
      {
        code: 2,
        name: 'Blue T-Shirt',
        category: 'Clothing',
      },
    ],
    columns: [
      {
        field: 'code',
        header: 'Code',
        sortable: true,
        cellType: CellType.TEXT,
      },
      {
        field: 'name',
        header: 'Name',
        sortable: true,
        width: '200px',
        cellType: CellType.TEXT,
      },
      {
        field: 'category',
        header: 'Category',
        sortable: true,
        width: '200px',
        cellType: CellType.TEXT,
      },
    ],
  },
  argTypes: {},
};
export const MultiSelection: Story = {
  render: (args) => ({
    props: { ...args },
    template: `
    <div style="height: 300px">
      <mas-data-table selectionMode="multiple" [value]="value" [columns]="columns" [totalRecords]="value.length">
      </mas-data-table>
    </div>
    `,
  }),
  args: {
    value: [
      {
        code: 1,
        name: 'Bamboo Watch',
        category: 'Accessories',
      },
      {
        code: 4,
        name: 'Black Watch',
        category: 'Accessories',
      },
      {
        code: 3,
        name: 'Blue Band',
        category: 'Fitness',
      },
      {
        code: 2,
        name: 'Blue T-Shirt',
        category: 'Clothing',
      },
    ],
    columns: [
      {
        field: 'code',
        header: 'Code',
        sortable: true,
        cellType: CellType.TEXT,
      },
      {
        field: 'name',
        header: 'Name',
        sortable: true,
        width: '200px',
        cellType: CellType.TEXT,
      },
      {
        field: 'category',
        header: 'Category',
        sortable: true,
        width: '200px',
        cellType: CellType.TEXT,
      },
    ],
  },
  argTypes: {},
};

export const HeaderTemplate: Story = {
  render: (args) => ({
    props: { ...args },
    template: `
    <div style="height: 300px">
      <mas-data-table [headerTemplate]="headerTemplate" [value]="value" [columns]="columns" [totalRecords]="value.length"></mas-data-table>
      <ng-template #headerTemplate>
        <tr>
          <th>header 1</th>
          <th style="width: 200px">header 2</th>
          <th style="width: 200px">header 3</th>
        </tr>
      </ng-template>
    </div>
    `,
  }),
  args: {
    value: [
      {
        code: 1,
        name: 'Bamboo Watch',
        category: 'Accessories',
      },
      {
        code: 4,
        name: 'Black Watch',
        category: 'Accessories',
      },
      {
        code: 3,
        name: 'Blue Band',
        category: 'Fitness',
      },
      {
        code: 2,
        name: 'Blue T-Shirt',
        category: 'Clothing',
      },
    ],
    columns: [
      {
        field: 'code',
        header: 'Code',
        sortable: true,
        cellType: CellType.TEXT,
      },
      {
        field: 'name',
        header: 'Name',
        sortable: true,
        width: '200px',
        cellType: CellType.TEXT,
      },
      {
        field: 'category',
        header: 'Category',
        sortable: true,
        width: '200px',
        cellType: CellType.TEXT,
      },
    ],
  },
};
export const BodyTemplate: Story = {
  render: (args) => ({
    props: { ...args },
    template: `
    <div style="height: 300px">
      <mas-data-table [bodyTemplate]="bodyTemplate" [value]="value" [columns]="columns" [totalRecords]="value.length">
      </mas-data-table>
      <ng-template #bodyTemplate let-item>
        <td>{{item.code}}</td>
        <td style="width: 200px">{{item.name}}</td>
        <td style="width: 200px">{{item.category}}</td>
      </ng-template>
    </div>
    `,
  }),
  args: {
    value: [
      {
        code: 1,
        name: 'Bamboo Watch',
        category: 'Accessories',
      },
      {
        code: 4,
        name: 'Black Watch',
        category: 'Accessories',
      },
      {
        code: 3,
        name: 'Blue Band',
        category: 'Fitness',
      },
      {
        code: 2,
        name: 'Blue T-Shirt',
        category: 'Clothing',
      },
    ],
    columns: [
      {
        field: 'code',
        header: 'Code',
        sortable: true,
        cellType: CellType.TEXT,
      },
      {
        field: 'name',
        header: 'Name',
        sortable: true,
        width: '200px',
        cellType: CellType.TEXT,
      },
      {
        field: 'category',
        header: 'Category',
        sortable: true,
        width: '200px',
        cellType: CellType.TEXT,
      },
    ],
  },
  argTypes: {},
};
export const FooterTemplate: Story = {
  render: (args) => ({
    props: { ...args },
    template: `
    <div style="height: 300px">
      <mas-data-table [footerTemplate]="footerTemplate" [value]="value" [columns]="columns" [totalRecords]="value.length"></mas-data-table>
      <ng-template #footerTemplate>
        Footer
      </ng-template>
    </div>
    `,
  }),
  args: {
    value: [
      {
        code: 1,
        name: 'Bamboo Watch',
        category: 'Accessories',
      },
      {
        code: 4,
        name: 'Black Watch',
        category: 'Accessories',
      },
      {
        code: 3,
        name: 'Blue Band',
        category: 'Fitness',
      },
      {
        code: 2,
        name: 'Blue T-Shirt',
        category: 'Clothing',
      },
    ],
    columns: [
      {
        field: 'code',
        header: 'Code',
        sortable: true,
        cellType: CellType.TEXT,
      },
      {
        field: 'name',
        header: 'Name',
        sortable: true,
        width: '200px',
        cellType: CellType.TEXT,
      },
      {
        field: 'category',
        header: 'Category',
        sortable: true,
        width: '200px',
        cellType: CellType.TEXT,
      },
    ],
  },
};
export const NoDataTemplate: Story = {
  render: (args) => ({
    props: { ...args },
    template: `
    <div style="height: 300px">
      <mas-data-table [noDataTemplate]="noDataTemplate" [value]="value" [columns]="columns" [totalRecords]="value.length">No Data</mas-data-table>
    </div>
    `,
  }),
  args: {
    value: [],
    columns: [
      {
        field: 'code',
        header: 'Code',
        sortable: true,
        cellType: CellType.TEXT,
      },
      {
        field: 'name',
        header: 'Name',
        sortable: true,
        width: '200px',
        cellType: CellType.TEXT,
      },
      {
        field: 'category',
        header: 'Category',
        sortable: true,
        width: '200px',
        cellType: CellType.TEXT,
      },
    ],
  },
};
export const CheckboxCell: Story = {
  args: {
    columns: [
      {
        field: 'code',
        header: 'Code',
        sortable: true,
        cellType: CellType.TEXT,
      },
      {
        field: 'name',
        header: 'Name',
        sortable: true,
        width: '200px',
        cellType: CellType.TEXT,
      },
      {
        field: 'category',
        header: 'Category',
        sortable: true,
        width: '200px',
        cellType: CellType.TEXT,
      },
      {
        field: 'choose',
        header: 'Choose',
        sortable: true,
        width: '150px',
        cellType: CellType.CHECKBOX,
      },
    ],
    value: [
      {
        code: { text: 1 },
        name: { text: 'Bamboo Watch' },
        category: { text: 'Accessories' },
        choose: { selected: false },
      },
      {
        code: { text: '4' },
        name: { text: 'Black Watch' },
        category: { text: 'Accessories' },
        choose: { selected: true },
      },
      {
        code: { text: '3' },
        name: { text: 'Blue Band' },
        category: { text: 'Fitness' },
        choose: { selected: false },
      },
      {
        code: { text: '2' },
        name: { text: 'Blue T-Shirt' },
        category: { text: 'Clothing' },
        choose: { selected: true },
      },
    ],
  },
};
export const ActionCell: Story = {
  args: {
    columns: [
      {
        field: 'code',
        header: 'Code',
        sortable: true,
        cellType: CellType.TEXT,
      },
      {
        field: 'name',
        header: 'Name',
        sortable: true,
        width: '200px',
        cellType: CellType.TEXT,
      },
      {
        field: 'action',
        header: 'Action',
        sortable: true,
        width: '100px',
        cellType: CellType.ACTION,
      },
    ],
    value: [
      {
        code: { text: '1' },
        name: { text: 'Bamboo Watch' },
        action: {
          icon: 'mas-note-pencil-outlined mas-office-and-editing--outlined',
          action: () => console.log('action'),
        },
      },
      {
        code: { text: 4 },
        name: { text: 'Black Watch' },
        action: {
          icon: 'mas-note-pencil-outlined mas-office-and-editing--outlined',
          action: () => console.log('action'),
        },
      },
    ],
  },
};
export const TagCell: Story = {
  args: {
    columns: [
      {
        field: 'code',
        header: 'Code',
        sortable: true,
        cellType: CellType.TEXT,
      },
      {
        field: 'name',
        header: 'Name',
        sortable: true,
        width: '200px',
        cellType: CellType.TEXT,
      },
      {
        field: 'category',
        header: 'Category',
        sortable: true,
        width: '200px',
        cellType: CellType.TAG,
      },
    ],
    value: [
      {
        code: { text: '1' },
        name: { text: 'Bamboo Watch' },
        category: { label: 'Accessories' },
      },
      {
        code: { text: 4 },
        name: { text: 'Black Watch' },
        category: { label: 'Accessories' },
      },
      {
        code: { text: 3 },
        name: { text: 'Blue Band' },
        category: { label: 'Fitness' },
      },
      {
        code: { text: 2 },
        name: { text: 'Blue T-Shirt' },
        category: { label: 'Clothing' },
      },
    ],
  },
};
