import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'mas-text-area',
  templateUrl: 'text-area.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MasTextArea,
      multi: true,
    },
  ],
  host: {
    class: 'mas-text-area_v2',
    '[class.mas-text-area_v2--invalid]': 'invalid',
    '[class.mas-text-area_v2--disabled]': 'disabled',
  },
})
export class MasTextArea implements OnInit {
  focused: boolean = false;
  _focusChanged(isFocused: boolean) {
    if (isFocused !== this.focused) {
      this.focused = isFocused;
    }
  }
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value;
    value ? this.input.disable() : this.input.enable();
  }
  protected _disabled: boolean = false;
  protected input = new FormControl('');
  protected _value: string = '';
  model: any;
  @ViewChild('textarea') inputViewChild: ElementRef | undefined;
  @Input() maxLength: number=200;
  @Input() TextErrorMsg: string;
  @Input() placeholder: string = '';
  @Input() ShowCounter: boolean = false;
  @Input() ShowErrMsg: boolean = false;
  @Input() required: boolean = false;
  @Input() formControl: FormControl | undefined;
  @Input() filled: boolean = false;
  @Output() change: EventEmitter<any> = new EventEmitter();
  @Output() inputChangeEvent: EventEmitter<string> = new EventEmitter();
  @Input()
  set invalid(value: boolean | undefined) {
    this._invalid = value;
  }
  get invalid(): boolean | undefined {
    if (this.input && this._invalid === undefined) {
      return !this.input?.valid && this.input.touched;
    }
    return this._invalid;
  }
  protected _invalid: boolean | undefined = undefined;
  set value(value: string) {
    this._value = value;
  }
  get value(): string {
    return this._value;
  }
  get empty() {
    return this._value === '' ? true : false;
  }

 
  protected onChangeHandler = (_: any) => {};
 
  writeValue(obj: any): void {
    this.input.setValue(obj);
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  updateModel(event: Event) {
    let newModelValue = this.value;

    this.onChangeHandler(newModelValue);
    this.model = newModelValue;
    if (this.formControl) {
      this.formControl.setValue(newModelValue);
    }
    this.change.emit({ value: newModelValue, originalEvent: event });
  }
  onChange(event: Event) {
    this.updateModel(event);
  }

  ngOnInit() {}
 
}
