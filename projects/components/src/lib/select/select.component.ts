import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  NgZone,
  QueryList,
  TemplateRef,
  AfterContentInit,
  HostListener,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MasOption } from './option.component';
import {
  Observable,
  Subject,
  defer,
  map,
  merge,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
} from 'rxjs';
export interface selectedOption {
  option: MasOption | undefined;
  isSelected: boolean;
}
@Component({
  selector: 'mas-select',
  templateUrl: './select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MasSelect,
      multi: true,
    },
  ],
  host: {
    class: 'mas-select',
    '[class.mas-select--invalid]': 'invalid',
    '[class.mas-select--disabled]': 'disabled',
    '[class.mas-select--medium]': 'size === "M"',
    '[class.mas-select--small]': 'size === "S"',
  },
})
export class MasSelect implements ControlValueAccessor, AfterContentInit {
  static selectCount = 0;
  protected _value: string = '';
  protected selected: selectedOption = { option: undefined, isSelected: false };
  private _panelOpen: boolean = false;

  @Input() identifier = `select-${MasSelect.selectCount++}`;
  @Input() disabled: boolean = false;
  @Input() invalid: boolean = false;
  @Input() size: 'M' | 'S' = 'S';
  @Input() filled: boolean = false;
  @Input()
  set value(value: string) {
    this._value = value;
    this.updateValue();
  }
  get value(): string {
    if (this.empty) {
      return this._value;
    }
    return this.options.filter((option) => option.selected)[0].value;
  }
  @Input() placeholder: string = '';
  get panelOpen(): boolean {
    return this._panelOpen;
  }
  @Output() change = new EventEmitter();
  readonly _destroy = new Subject<void>();
  get triggerValue() {
    if (this.empty) {
      return '';
    }
    return this.selected.option?.text;
  }
  get empty(): boolean {
    return !this.options || this.selected.isSelected === false;
  }
  @ContentChildren(MasOption) options: QueryList<MasOption>;

  ngAfterContentInit() {
    this.options.changes.subscribe({
      next: () => {
        this.updateValue();
      },
    });
    this.options.changes
      .pipe(startWith(null), takeUntil(this._destroy))
      .subscribe(() => {
        this._resetOptions();
      });
  }
  constructor(protected _ngZone: NgZone, protected eRef: ElementRef) {}
  @HostListener('document:click', ['$event'])
  clickOut(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.close();
    }
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
    this.optionChanges
      .pipe(takeUntil(changedOrDestroyed))
      .subscribe((event) => {
        this._onSelect(event.option);
        if (this._panelOpen) {
          this.close();
          this.focusOut();
        }
      });
  }
  private _onSelect(option: MasOption): void {
    if (option.value == null) {
      option.deselect();
    } else if (!option.selected) {
      this.options.map((option) => {
        if (option.selected) option.deselect();
      });
      option.select();
      this.selected.isSelected = true;
      this.selected.option = this.options.filter(
        (option) => option.selected
      )[0];
      this.onChange(this.selected);
    }
  }
  toggle() {
    this.panelOpen ? this.close() : this.open();
  }
  open() {
    this._panelOpen = true;
  }
  close() {
    this._panelOpen = false;
  }
  focus() {}
  onChange(event: any) {
    this.onChangeHandler(event.option.value);
    this.change.emit();
  }
  focusOut() {
    this.onTouchedHandler();
  }
  public isTemplate(value: any) {
    return value instanceof TemplateRef;
  }

  protected onChangeHandler = (_: any) => {};
  protected onTouchedHandler = () => {};

  writeValue(obj: any): void {
    this.value = obj;
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
  updateValue() {
    if (this.options) {
      const option = this.options.find((option) => option.value === this.value);
      if (option) {
        this._onSelect(option);
      }
    }
  }
}
