import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  QueryList,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MasDropdownOption } from './dropdown-option.component';
import { Observable, Subject, defer, merge, startWith, switchMap, take, takeUntil } from 'rxjs';

interface selectedOption {
  option: MasDropdownOption | undefined;
  isSelected: boolean;
}
@Component({
  selector: 'mas-input-dropdown',
  templateUrl: 'input-dropdown.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MasInputDropdown,
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
export class MasInputDropdown implements OnInit, ControlValueAccessor, AfterContentInit {
  @Input() leadingIcon: string = '';
  @Input() labelText: string;
  @Input() placeholder: string = '';
  @Input() helperText: string;
  @Input() identifier = `input-dropdown-${MasInputDropdown.dropdownCount++}`;
  @Input() disabled: boolean = false;
  @Input() invalid: boolean = false;
  @Input() size: 'M' | 'S' = 'S';
  @Input() multi: boolean = false;
  @Input() type: 'checkbox' | 'image' | 'icon' | 'text' = 'text';

  @Output() change = new EventEmitter();
  readonly _destroy = new Subject<void>();
  @ContentChildren(MasDropdownOption) options: QueryList<MasDropdownOption>;
  static dropdownCount: number = 0;
  protected _values: Set<any> = new Set();
  protected selectedOptions: Map<any, selectedOption> = new Map();
  protected _panelOpen: boolean = false;
  private _ngZone: any;

  get triggerValue(): string {
    let triggerValue: string = '';
    this.selectedOptions.forEach((option) => {
      if (option.option?.text) {
        triggerValue = triggerValue.concat(option.option.text, ', ');
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

  ngOnInit() {}
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
  onChange(event: any) {
    this.onChangeHandler(event.map((selected: any) => selected.value.option.value));
    this.change.emit();
  }
  private _onSelect(option: MasDropdownOption): void {
    if (!option.selected) {
      if (!this.multi) {
        this.options.map((option) => {
          if (option.selected) option.deselect();
        });
        this.selectedOptions.clear();
        this._values.clear();
      }
      option.select();
      this.selectedOptions.set(option.value, { isSelected: true, option });
      this._values.add(option.value);
    } else if (this.multi) {
      option.deselect();
      this.selectedOptions.delete(option.value);
      this._values.delete(option.value);
    }
    this.onChange(Array.from(this.selectedOptions, ([_, value]) => ({ value })));
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
