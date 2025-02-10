import { AfterViewInit, Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'mas-search-bar',
  templateUrl: 'search-bar.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MasSearchBar),
      multi: true,
    },
  ],
  host: {
    class: 'mas-search-bar',
    '[class.mas-search-bar--disabled]': 'disabled',
    '[class.mas-search-bar_size--small]': 'size === "small"',
    '[class.mas-search-bar_size--medium]': 'size === "medium"'
  },
})
export class MasSearchBar implements ControlValueAccessor, AfterViewInit {
  protected focused: boolean = false;
  protected _query: string = '';
  protected input = new FormControl('');
  protected onChangeHandler = (_: any) => {};
  protected onTouchedHandler = () => {};
  @ViewChild('searchinput') inputViewChild: ElementRef | undefined;
  /**
   * Whether the search bar should be disabled. Default: false.
   */
  @Input() disabled: boolean = false;
  /**
   * Placeholder to be shown if no value has been entered.
   */
  @Input() placeholder: string = '';
  /**
   * The size of the search bar. Availabel options: 'small', 'medium'. Default: 'medium'.
   */
  @Input() size: 'medium' | 'small' = 'medium'
  /**
   * Query value for the search bar.
   */
  @Input()
  get query(): string {
    return this._query;
  }
  set query(value: string) {
    this._query = value;
  }
  /**
   * Emits the clear query event promise on clear is clicked.
   */
  @Output() clearClick: EventEmitter<Event> = new EventEmitter();
  /**
   * Emits the search query promise on user's typing input. 
   */
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
    this.onFocus(true);
    this.clearClick.emit(event);
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
