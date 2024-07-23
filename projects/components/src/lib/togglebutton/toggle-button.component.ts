import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface ToggleButtonEvent {}
@Component({
  selector: 'mas-toggle-button',
  templateUrl: 'toggle-button.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MasToggleButton),
      multi: true,
    },
  ],
})
export class MasToggleButton implements OnInit, ControlValueAccessor {
  protected _disabled: boolean = false;
  protected _checked: boolean = false;

  @Input()
  set checked(value: boolean) {
    if (this._checked !== value) {
      this._checked = value;
    }
    this.cd.markForCheck();
  }
  get checked(): boolean {
    return this._checked;
  }
  @Input() formControl: FormControl | undefined;
  @Input() identifier: string = '';
  @Input() size: 'S' | 'L' = 'S';
  @Input()
  set disabled(value: boolean) {
    this._disabled = value;
  }
  get disabled(): boolean {
    return this._disabled;
  }
  @Output() change: EventEmitter<ToggleButtonEvent> = new EventEmitter<ToggleButtonEvent>();
  @ViewChild('tbutton') inputViewChild!: ElementRef;
  model: any;
  onModelChange: Function = () => {};
  onModelTouched: Function = () => {};

  constructor(public cd: ChangeDetectorRef) {}
  writeValue(obj: boolean): void {
    this.model = obj;
    this._checked = obj;
    this.cd.markForCheck();
  }
  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onModelTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cd.markForCheck();
  }
  updateModel(event: Event) {
    let newModelValue = this.checked;

    this.onModelChange(newModelValue);
    this.model = newModelValue;
    if (this.formControl) {
      this.formControl.setValue(newModelValue);
    }
    this.onChange({ checked: newModelValue, originalEvent: event });
  }
  onClick(event: Event, toggleButton: HTMLElement) {
    this.onModelTouched();
    if (!this.disabled) {
      this._checked = !this._checked;
      this.updateModel(event);
      toggleButton.focus();
    }
  }
  onChange(event: {}) {
    this.change.emit(event);
  }
  ngOnInit() {}
}
