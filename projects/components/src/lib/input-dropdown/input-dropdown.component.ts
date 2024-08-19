import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MasDropdownOption } from './dropdown-option.component';
import { Observable, Subject, defer, merge, startWith, switchMap, take, takeUntil } from 'rxjs';

interface SelectedOption {
  option: MasDropdownOption | undefined;
  isSelected: boolean;
}
@Component({
  selector: 'mas-input-dropdown',
  templateUrl: 'input-dropdown.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MasInputDropdown),
      multi: true,
    },
  ],
  host: {
    class: 'mas-input-dropdown',
    '[class.mas-input-dropdown--overlay]': 'options.length > 8',
    '[class.mas-input-dropdown--invalid]': 'invalid',
    '[class.mas-input-dropdown--disabled]': 'disabled',
    '[class.mas-input-dropdown--medium]': 'size === "M"',
    '[class.mas-input-dropdown--small]': 'size === "S"',
  },
})
export class MasInputDropdown implements ControlValueAccessor, AfterContentInit {
  /**
   * A leading icon can be added inside the dropdown to give a clue to the type of data to be entered.
   */
  @Input() leadingIcon: string = '';
  /**
   * Label for MasInputDropdown.
   */
  @Input() labelText: string;
  /**
   * Placeholder to be shown if no value has been selected.
   */
  @Input() placeholder: string = '';
  /**
   * A unique id for the MasInputDropdown. If none is supplied, it will be auto-generated.
   */
  @Input() identifier = `input-dropdown-${MasInputDropdown.dropdownCount++}`;
  /**
   * Whether the component is disabled.
   */
  @Input() disabled: boolean = false;
  /**
   * Whether the component is invalid.
   */
  @Input() invalid: boolean = false;
    /**
   * The size of the input-dropdown. Availabel options: 'S', 'M'. Default: 'S'.
   */
  @Input() size: 'M' | 'S' = 'S';
  /**
   * Whether to select one or more items from the dropdown menu
   */
  @Input() multi: boolean = false;
  /**
   * MasInputDropdown's types of menu include: 'text', 'checkbox', 'image', 'icon'.
   */
  @Input() type: 'checkbox' | 'image' | 'icon' | 'text' = 'text';
  /**
   * Callback to invoke when value of MasInputDropdown changes.
   */
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @ContentChildren(MasDropdownOption) options: QueryList<MasDropdownOption>;
  readonly _destroy = new Subject<void>();
  static dropdownCount: number = 0;
  protected _values: Set<any> = new Set();
  set values(value: any) {
    this._values.add(value);
    this.onChangeHandler(value);
  }
  get values(): any | any[] {
    if (this.multi) {
      return Array.from(this._values);
    }
    return this._values.values().next().value;
  }
  clearValues(item?: any) {
    if (item) {
      this._values.delete(item);
      this.selectedOptions.delete(item);
    } else {
      this._values.clear();
      this.selectedOptions.clear();
    }
  }
  protected selectedOptions: Map<any, SelectedOption> = new Map();
  protected _panelOpen: boolean = false;
  private _ngZone: any;

  get triggerValue(): string {
    let triggerValue: string = '';
    this.selectedOptions.forEach((selected) => {
      if (selected.option?.text) {
        triggerValue = triggerValue.concat(selected.option.text, ', ');
      }
    });
    return this.isEmpty ? '' : triggerValue.slice(0, -2);
  }
  get isEmpty() {
    return !this.options || this.selectedOptions.size === 0;
  }
  constructor(protected eRef: ElementRef) {}
  ngAfterContentInit(): void {
    this.options.changes.subscribe({ next: () => this.updateValue() });
    this.options.changes.pipe(startWith(null), takeUntil(this._destroy)).subscribe(() => {
      this._resetOptions();
    });
    // todo: optimized
    this.options.map(
      (option) => ((option.isMultiple = this.multi), (option.type = this.type), (option.size = this.size))
    );
  }
  protected onChangeHandler = (_: any) => {};
  protected onTouchedHandler = () => {};
  writeValue(obj: any): void {
    if (this.options) {
      const selected = this.options.find((option) => option.value === obj);
      if (selected) {
        this._onSelect(selected);
      }
    }
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
  readonly optionChanges: Observable<any> = defer(() => {
    const options = this.options;
    if (options) {
      return options.changes.pipe(
        startWith(options),
        switchMap(() => merge(...options.map((option) => option.onChange)))
      );
    }
    return this._ngZone.onStable.pipe(
      take(1),
      switchMap(() => this.optionChanges)
    );
  }) as Observable<any>;
  private _resetOptions(): void {
    const changedOrDestroyed = merge(this.options.changes, this._destroy);
    this.optionChanges.pipe(takeUntil(changedOrDestroyed)).subscribe((event) => {
      this._onSelect(event.option);
      if (this._panelOpen && !this.multi) {
        this.close();
        this.focusOut();
      }
    });
  }
  // todo: declare function
  _onChange(event: any) {
    this.onChangeHandler(event.map((selected: any) => selected.value.option.value));
    this.onChange.emit();
  }
  private _onSelect(option: MasDropdownOption): void {
    if (!option.selected) {
      if (!this.multi) {
        this.options.map((option) => {
          if (option.selected) option.deselect();
        });
        this.clearValues();
      }
      option.select();
      this.selectedOptions.set(option.value, { isSelected: true, option });
      this._values.add(option.value);
    } else if (this.multi) {
      option.deselect();
      this.clearValues(option.value);
    }
    this._onChange(Array.from(this.selectedOptions, ([_, value]) => ({ value })));
  }
  _onToggle() {
    this._panelOpen ? this.close() : this.open();
  }
  private close() {
    this._panelOpen = false;
  }
  private open() {
    this._panelOpen = true;
  }
  focusOut() {
    this.onTouchedHandler();
  }
  @HostListener('document:click', ['$event'])
  clickOut(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.close();
    }
  }
  updateValue() {
    if (this.options) {
      const option = this.options.find((option) => this._values.has(option.value));
      if (option) {
        this._onSelect(option);
      }
    }
  }
}
