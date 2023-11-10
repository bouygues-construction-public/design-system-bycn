import {
  ChangeDetectionStrategy,
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
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface CheckboxChangeEvent {
  /**
   * Checked value.
   */
  checked?: any;
  /**
   * Browser event.
   */
  originalEvent?: Event;
}
@Component({
  selector: 'mas-checkbox',
  templateUrl: 'checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MasCheckbox),
      multi: true,
    },
  ],
})
export class MasCheckbox implements OnInit, ControlValueAccessor {
  @Input() formControl: FormControl | undefined;
  @Input() labelText: string = '';
  @Input() identifier: string = '';

  @Input() size: 'S' | 'L' = 'S';

  @Input()
  get checked(): boolean {
    return this._checked;
  }
  set checked(value: boolean) {
    if (this.checked === value) return;
    this._checked = value;
    // reset indeterminate
    if (this._indeterminate) {
      this._indeterminate = false;
    }
    this.cd.markForCheck();
  }
  private _checked: boolean = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    const newValue = value;
    if (newValue !== this._disabled) {
      this._disabled = value;
    }
  }
  private _disabled: boolean = false;

  @Input()
  set indeterminate(value: boolean) {
    if (this._indeterminate === value) return;
    if(this.checked) this._checked = false
    this._indeterminate = value;
    if(this.inputViewChild && this.inputViewChild.nativeElement){
      this.inputViewChild.nativeElement.indeterminate = value
    }
    this.cd.markForCheck();
  }
  get indeterminate(): boolean {
    return this._indeterminate;
  }
  private _indeterminate: boolean = false;

  @Output()
  onChange: EventEmitter<CheckboxChangeEvent> = new EventEmitter();
  @ViewChild('input') inputViewChild: ElementRef | undefined;
  model: any;
  onModelChange: Function = () => {};
  onModelTouched: Function = () => {};

  constructor(public cd: ChangeDetectorRef) {}

  writeValue(obj: boolean): void {
    this.model = obj;
    this._checked = obj
    this.cd.markForCheck();
  }
  registerOnChange(fn: Function): void {
    this.onModelChange = fn;
  }
  registerOnTouched(fn: Function): void {
    this.onModelTouched = fn;
  }
  setDisabledState?(val: boolean): void {
    this.disabled = val;
    this.cd.markForCheck();
  }
  handleChange(event: Event) {
    this.updateModel(event);
  }
  updateModel(event: Event) {
    let newModelValue = this.checked;

    this.onModelChange(newModelValue);
    this.model = newModelValue;
    if (this.formControl) {
      this.formControl.setValue(newModelValue);
    }
    this.onChange.emit({ checked: newModelValue, originalEvent: event });
  }
  _onInputClick(event: Event, checkbox: HTMLElement) {
    this.onModelTouched();
    if (!this.disabled) {
      if (this.indeterminate) {
        this._indeterminate = false;
      }
      this._checked = !this._checked;
      this.updateModel(event);
      checkbox.focus();
    }
  }
  onBlur() {
    this.onModelTouched();
  }

  focus() {
    this.inputViewChild?.nativeElement.focus();
  }
  ngOnInit() {}
}
