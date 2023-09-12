import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import '@masoni/icons/dist/css/mas-icons.css';
import '@masoni/css-text-input/dist/index.css';
import {
  ControlValueAccessor,
  FormControl,
  FormControlName,
  NG_VALUE_ACCESSOR,
  NgForm,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'mas-text-input',
  templateUrl: 'text-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MasTextInput,
      multi: true,
    },
  ],
  host: {
    class: 'mas-text-input',
    '[class.mas-text-input--invalid]': 'invalid',
    '[class.mas-text-input--disabled]': 'disabled',
    '[class.mas-text-input--filled]': 'filled',
    '[class.mas-text-input--medium]': 'size === "M"',
  },
})
export class MasTextInput implements OnInit, ControlValueAccessor, AfterViewInit {
  focused: boolean = false;
  _focusChanged(isFocused: boolean) {
    if (isFocused !== this.focused) {
      this.focused = isFocused;
    }
  }
  static textInputCount = 0;
  @Input() identifier: string = `text-input-${MasTextInput.textInputCount++}`;
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value;
    value ? this.input.disable() : this.input.enable();
  }
  protected _disabled: boolean = false;
  @Input()
  get labelText(): string {
    return this._labelText;
  }
  set labelText(value: string) {
    this._labelText = value;
  }
  protected input = new FormControl('');
  protected _labelText: string;
  protected _value: string = '';
  model: any;
  @ViewChild('textinput') inputViewChild: ElementRef | undefined;
  @Input() formControlName: FormControlName | undefined;
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() size: 'M' | 'S' = 'S';
  @Input() formControl: FormControl | undefined;
  @Input() type: 'search' | 'tel' | 'text' | 'password' | 'email' = 'text';
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
  get leadingIcon(): string {
    let icon: string = 'none';
    switch (this.type) {
      case 'search':
        icon = 'mas-magnifyingglass-outlined';
        break;
      case 'email':
        icon = 'mas-envelopesimple-outlined';
        break;
      case 'password':
        icon = 'mas-lockkey-outlined';
        break;
      case 'tel':
        icon = 'mas-phone-outlined';
        break;
    }
    return icon;
  }
  get trailingIcon(): string {
    return this.type === 'password' ? 'mas-eye-filled' : 'none';
  }
  protected onChangeHandler = (_: any) => {};
  protected onTouchedHandler = () => {};
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
  showPassword(input: HTMLElement) {
    if (input.getAttribute('type') === 'password') {
      input.setAttribute('type', 'text');
    } else {
      input.setAttribute('type', 'password');
    }
  }
  ngOnInit() {}
  ngAfterViewInit(): void {
    this.input.valueChanges.subscribe((value) => {
      this.onChangeHandler(value?.trim());
      this.value = value ?? '';
    });
    if (this.type === 'tel') {
      this.input.addValidators(Validators.pattern(/[0-9\+\-\ ]/));
    } else if (this.type === 'email') {
      this.input.addValidators(Validators.email);
    }
  }
}
