import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'mas-search-bar',
  templateUrl: 'search-bar.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MasSearchBar,
      multi: true,
    },
  ],
  host: {
    class: 'mas-search-bar',
    '[class.mas-search-bar--disabled]': 'disabled',
  },
})
export class MasSearchBar implements ControlValueAccessor, AfterViewInit {
  protected focused: boolean = false;
  protected _query: string = '';
  protected input = new FormControl('');
  protected onChangeHandler = (_: any) => {};
  protected onTouchedHandler = () => {};
  @ViewChild('searchinput') inputViewChild: ElementRef | undefined;
  @Input() disabled: boolean;
  @Input() placeholder: string = '';
  @Input()
  get query(): string {
    return this._query;
  }
  set query(value: string) {
    this._query = value;
  }
  @Output() clearClick: EventEmitter<Event> = new EventEmitter();
  @Output() closeClick: EventEmitter<Event> = new EventEmitter();
  @Output() search: EventEmitter<any> = new EventEmitter();
  get empty(): boolean {
    return this.query === '' ? true : false;
  }
  ngAfterViewInit(): void {
    this.input.setValue(this.query);
    this.input.valueChanges.subscribe((value) => {
      this.onChangeHandler(value?.trim());
      this.query = value ?? '';
    });
  }
  writeValue(obj: any): void {
    this.input.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChangeHandler = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedHandler = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onClearClick(event: any) {
    this.input.setValue('');
    this.inputViewChild?.nativeElement.focus();
    this.clearClick.emit(event);
  }
  onCloseClick(event: any) {
    this.onFocus(false);
    this.closeClick.emit(event);
  }
  onSearch(query: string) {
    if (query !== '') {
      this.search.emit(query);
    }
  }
  onFocus(isFocused: boolean) {
    if (isFocused !== this.focused) {
      this.focused = isFocused;
    }
  }
}
