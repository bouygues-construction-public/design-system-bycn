import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  NgZone,
  QueryList,
  TemplateRef,
  ViewChild,
  AfterContentInit,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import '@masoni/css-select/dist/index.css';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { MasOption } from './option.component';
import { Observable, Subject, defer, map, merge, startWith, switchMap, take, takeUntil, tap } from 'rxjs';
import { option } from 'yargs';
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
})
export class MasSelect implements ControlValueAccessor, AfterViewInit, AfterContentInit {
  static selectCount = 0;
  protected _value: string = '';
  protected selected: selectedOption = { option: undefined, isSelected: false }; // ? do we need other parameters like: value and TriggerValue
  private _panelOpen: boolean = false;
  private _placeholder: string;

  @Input() label: any | TemplateRef<any>;
  @Input() helperText: any | TemplateRef<any>;
  @Input() errorMessage: any | TemplateRef<any>;
  @Input() identifier = `select-${MasSelect.selectCount++}`;
  @Input() disabled: boolean = false;
  @Input() invalid: boolean = false;
  @Input() size: 'medium' | 'small' = 'small'; // ! not define setup in the component yet
  // ? NEEDED? ===============================================
  @Input()
  set value(value: string) {
    this._value = value;
  }
  get value(): string {
    if (this.empty) {
      return '';
    }
    return this.options.filter((option) => option.selected)[0].value; //this.options;
  }
  // ? ========================================================
  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(value: string) {
    this._placeholder = value;
  }
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

  ngAfterViewInit() {
    // todo: place to init value of parameters
  }
  ngAfterContentInit() {
    this.options.changes.pipe(startWith(null), takeUntil(this._destroy)).subscribe(() => {
      this._resetOptions();
    });
  }
  constructor(protected _ngZone: NgZone) {}

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
      this.selected.option = this.options.filter((option) => option.selected)[0];
    }
  }
  toggle() {
    console.log('_panelOpen: ' + this._panelOpen);
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
    // this.value = event.target.value;
    console.log('onChange');
    this.onChangeHandler(event.target.value);
    this.change.emit(event.target.value);
  }
  focusOut() {
    this.onTouchedHandler();
  }
  public isTemplate(value: any) {
    return value instanceof TemplateRef; // ? what's this ?
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
}
