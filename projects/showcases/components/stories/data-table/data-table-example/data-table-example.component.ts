import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import {
  ActionCell,
  CellType,
  CheckboxCell,
  TagCell,
  TextCell,
} from 'projects/components/src/lib/data-table/data-table.model';
import { MasDataTableModule } from 'projects/components/src/public-api';

@Component({
  selector: 'app-data-table',
  template: `
    <div style="height: 300px">
      <mas-data-table [value]="textValue" [columns]="textColumns" [totalRecords]="textValue.length"> </mas-data-table>
    </div>
    <div style="height: 200px">
      <mas-data-table [value]="actionValue" [columns]="actionColumns" [totalRecords]="actionValue.length">
      </mas-data-table>
    </div>
    <div style="height: 300px">
      <mas-data-table [value]="checkboxValue" [columns]="checkboxColumns" [totalRecords]="checkboxValue.length">
      </mas-data-table>
    </div>
    <div style="height: 300px">
      <mas-data-table [value]="tagValue" [columns]="tagColumns" [totalRecords]="tagValue.length"> </mas-data-table>
    </div>
  `,
})
export class DataTableExample {
  textColumns = [
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
  ];
  // text cell
  textValue: { code: TextCell; name: TextCell; category: TextCell }[] = [
    {
      code: { text: 1, leadingIcon: '' },
      name: {
        trailingIcon: 'mas-seal-warning-outlined mas-security-and-warnings--outlined',
        text: 'Bamboo Watch',
        leadingIcon: 'mas-seal-question-outlined mas-security-and-warnings--outlined',
      },
      category: { text: 'Accessories' },
    },
    {
      code: { text: 4, leadingIcon: '' },
      name: { text: 'Black Watch' },
      category: { text: 'Accessories', leadingIcon: '' },
    },
    {
      code: { text: 3, leadingIcon: '' },
      name: { text: 'Blue Band', leadingIcon: '' },
      category: { text: 'Fitness', leadingIcon: '' },
    },
    {
      code: { text: 2, leadingIcon: '' },
      name: { text: 'Blue T-Shirt', leadingIcon: '' },
      category: { text: 'Clothing', leadingIcon: '' },
    },
  ];
  // action cell
  actionColumns = [
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
  ];
  actionValue: { code: TextCell; name: TextCell; action: ActionCell }[] = [
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
  ];
  // checkbox cell
  checkboxColumns = [
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
      width: '100px',
      cellType: CellType.CHECKBOX,
    },
  ];
  checkboxValue: { code: TextCell; name: TextCell; category: TextCell; choose: CheckboxCell }[] = [
    {
      code: { text: '1' },
      name: { text: 'Bamboo Watch' },
      category: { text: 'Accessories' },
      choose: { selected: false },
    },
    {
      code: { text: 4 },
      name: { text: 'Black Watch' },
      category: { text: 'Accessories' },
      choose: { selected: true },
    },
    {
      code: { text: 3 },
      name: { text: 'Blue Band' },
      category: { text: 'Fitness' },
      choose: { selected: false },
    },
    {
      code: { text: 2 },
      name: { text: 'Blue T-Shirt' },
      category: { text: 'Clothing' },
      choose: { selected: true },
    },
  ];
  // tag cell
  tagColumns = [
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
  ];
  tagValue: { code: TextCell; name: TextCell; category: TagCell }[] = [
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
  ];
}

@NgModule({
  imports: [CommonModule, MasDataTableModule],
  exports: [DataTableExample],
  declarations: [DataTableExample],
})
export class DataTableExampleModule {}
