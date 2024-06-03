import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  TemplateRef,
  booleanAttribute,
} from '@angular/core';
import { Column } from './data-table.model';

@Component({
  selector: 'mas-data-table',
  templateUrl: 'data-table.component.html',
  host: {
    class: 'mas-data-table',
  },
})
export class MasDataTable implements AfterViewInit, OnDestroy {
  /**
   * An array of objects to display.
   */
  @Input()
  set value(value: any[]) {
    this._value = value;
  }
  get value() {
    return this._value;
  }
  /**
   * An array of objects to represent dynamic columns.
   */
  @Input() get columns(): Column[] | undefined {
    return this._columns;
  }
  set columns(cols: Column[] | undefined) {
    this._columns = cols;
  }
  /**
   * Displays a loader to indicate data load is in progress.
   */
  @Input({ transform: booleanAttribute }) loading: boolean | undefined;
  /**
   * The icon to show while indicating data load is in progress.
   */
  @Input() loadingIcon: string | undefined;
  /**
   * Whether to show the loading mask when loading property is true.
   */
  @Input({ transform: booleanAttribute }) showLoader: boolean = true;
  /**
   * Number of total records, defaults to length of value when not defined.
   */
  @Input() get totalRecords(): number {
    return this._totalRecords;
  }
  set totalRecords(val: number) {
    // this._totalRecords = val;
    // this.tableService.onTotalRecordsChange(this._totalRecords);
    this._totalRecords = this.value.length;
  }
  /**
   * Name of the field to sort data by default.
   */
  @Input() get sortField(): string | undefined | null {
    return this._sortField;
  }
  set sortField(val: string | undefined | null) {
    this._sortField = val;
  }

  /**
   * Order to sort when default sorting is enabled.
   */
  @Input() get sortOrder(): number {
    return this._sortOrder;
  }
  set sortOrder(val: number) {
    this._sortOrder = val;
  }
  /**
   * Selected row in single mode or an array of values in multiple mode.
   */
  @Input() get selection(): any {
    return this._selection;
  }
  set selection(val: any) {
    this._selection = val;
  }
  /**
   * Whether all data is selected.
   */
  @Input() get selectAll(): boolean | null {
    return this._selectAll;
  }
  set selectAll(value: boolean | null) {
    this._selectAll = value;
  }
  /**
   * Set footer template to customize what is displayed in the tfoot section of the table
   */
  @Input() footerTemplate: TemplateRef<any> | null;
  /**
   * Set body template to customize what is displayed in the tbody section of the table
   */
  @Input() bodyTemplate: TemplateRef<any> | null = null;
  /**
   * Set header template to customize what is displayed in the thead section of the table
   */
  @Input() headerTemplate: TemplateRef<any> | null;
  /**
   * Number of rows to display per page.
   */
  @Input() get rows(): number | undefined {
    return this._rows;
  }
  set rows(val: number | undefined) {
    this._rows = val;
  }
  /**
   * Whether to use the default sorting or a custom one using sortFunction.
   */
  @Input() customSort: boolean | undefined;
  /**
   * Specifies the selection mode, valid values are "single" and "multiple".
   */
  @Input() selectionMode: 'single' | 'multiple' | undefined | null;
  /**
   * Emits when the all of the items selected or unselected.
   */
  @Output() selectAllChange: EventEmitter<any> = new EventEmitter<any>();
  /**
   * Callback to invoke on selection changed.
   */
  @Output() selectionChange: EventEmitter<any | null> = new EventEmitter<any | null>();
  /**
   * Callback to invoke when paging, sorting or filtering happens in lazy mode.
   */
  @Output() onLazyLoad: EventEmitter<any> = new EventEmitter<any>();
  /**
   * A function to implement custom sorting, refer to sorting section for details.
   */
  @Output() sortFunction: EventEmitter<any> = new EventEmitter<any>();
  /**
   * Callback to invoke when a column gets sorted.
   */
  @Output() sort: EventEmitter<any> = new EventEmitter<any>();

  _value: any[] = [];
  _totalRecords: number = 0;
  _sortField: string | undefined | null;
  _sortOrder: number = 1;
  _selection: any;
  _selectAll: boolean | null;
  _columns: Column[] | undefined;
  _rows: number | undefined;
  get noData() {
    return !this.value || this.totalRecords === 0 || (this.value.length === 1 && this.value[0].length === 0);
  }

  constructor() {}
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
  }

  isSingleSelectionMode() {
    return this.selectionMode === 'single';
  }

  isMultipleSelectionMode() {
    return this.selectionMode === 'multiple';
  }

  ngOnInit() {}

  onRowClick(rowData: any, index: number, originalEvent?: Event) {
    if (this.selectionMode) {
      const selected = this.isRowSelected(rowData, index);
      if (this.isMultipleSelectionMode()) {
        if (selected) {
          this._selection = this.selection.filter((val: any, i: number) => val !== rowData);
          this.selectionChange.emit({
            originalEvent: originalEvent,
            data: rowData,
            index: index,
            isSelected: selected,
          });
        } else {
          this._selection = this.selection ? [...this.selection, rowData] : [rowData];
          this.selectionChange.emit({
            originalEvent: originalEvent,
            data: rowData,
            index: index,
            isSelected: selected,
          });
        }
      } else if (this.isSingleSelectionMode()) {
        if (selected) {
          this.selection = null;
          this.selectionChange.emit({
            originalEvent: originalEvent,
            data: rowData,
            index: index,
            isSelected: selected,
          });
        } else {
          this.selection = rowData;
          this.selectionChange.emit({
            originalEvent: originalEvent,
            data: rowData,
            index: index,
            isSelected: selected,
          });
        }
      }
    }
  }
  onSelectAllClick() {
    this.selectAll = !this.selectAll;
    if (this.selectAll) {
      this.selection = this.value;
    } else {
      this.selection = null;
    }
    this.selectAllChange.emit(this.selection);
  }
  isRowSelected(rowData: any, index: number): boolean {
    if (rowData && this.selection) {
      if (Array.isArray(this.selection)) {
        const isSelected = this.selection.find((selected) => selected === rowData);
        return isSelected === undefined ? false : isSelected;
      } else return rowData === this.selection;
    }
    return false;
  }

  onSort(isSortable: boolean | undefined, sortField: string, originalEvent: Event) {
    if (isSortable && sortField) {
      this.sortOrder = this.sortField === sortField ? (this.sortOrder = -1 * this.sortOrder) : this.sortOrder;
      this.sortField = sortField;
      this.value.sort((data1, data2) => {
        let result = null;
        if (
          typeof (data1[sortField].text || data1[sortField].label || data1[sortField]) === 'string' &&
          typeof (data2[sortField].text || data2[sortField].label || data2[sortField]) === 'string'
        )
          result = (data1[sortField].text || data1[sortField]).localeCompare(data2[sortField].text || data2[sortField]);
        else
          result =
            (data1[sortField].text || data1[sortField].selected || data1[sortField]) <
            (data2[sortField].text || data2[sortField].selected || data2[sortField])
              ? -1
              : (data1[sortField].text || data1[sortField].selected || data1[sortField]) >
                (data2[sortField].text || data2[sortField].selected || data2[sortField])
              ? 1
              : 0;
        return this.sortOrder * result;
      });
      this._value = [...this.value];
      // todo #4: reset table
      if (this.customSort) {
        this.sortFunction.emit({
          data: this.value,
          order: this.sortOrder,
          field: this.sortField,
          // sort mode?
        });
      }
      this.sort.emit({ order: this.sortOrder, field: this.sortField });
    }
  }
}