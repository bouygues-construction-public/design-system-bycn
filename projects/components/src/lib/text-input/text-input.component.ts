import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'mas-text-input',
  templateUrl: 'text-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MasTextInput),
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
export class MasTextInput implements ControlValueAccessor, AfterViewInit {
  static textInputCount = 0;
  /**
   * A unique id for the MasTextInput If none is supplied, it will be auto-generated.
   */
  @Input() identifier: string = `text-input-${MasTextInput.textInputCount++}`;
  /**
   * Whether the component is disabled.
   */
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value;
    value ? this.input.disable() : this.input.enable();
  }
  /**
   * Placeholder to be shown if no value has been selected.
   */
  @Input() placeholder: string = '';
  /**
   * Whether the component is required.
   */
  @Input() required: boolean = false;
  /**
   * The size of the text-input. Availabel options: 'S', 'M'. Default: 'S'.
   */
  @Input() size: 'M' | 'S' = 'S';
  /**
   * Indicates that an element is to be focused on page load.
   */
  @Input() set autofocus(isFocused: boolean) {
    this.focused = isFocused !== false;
  }
  @Input() formControl: FormControl | undefined;
  /**
   * Input type of the element. Available options: 'text', 'search', 'tel', 'password', 'email'. Default: 'text'.
   */
  @Input() type: 'search' | 'tel' | 'text' | 'password' | 'email' = 'text';
  /**
   * Whether the component is invalid.
   */
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
  @Input() filled: boolean = false;
  /**
   * Callback to invoke when value of MasTextInput changes.
   */
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @ViewChild('textinput') inputViewChild: ElementRef | undefined;

  protected _disabled: boolean = false;
  protected focused: boolean = false;
  protected input = new FormControl('');
  protected _labelText: string;
  protected _value: string = '';
  protected _invalid: boolean | undefined = undefined;
  set value(value: string) {
    this._value = value;
    this.onChangeHandler(value);
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
        icon = 'mas-magnifying-glass-outlined mas-system-and-device--outlined';
        break;
      case 'email':
        icon = 'mas-envelope-simple-outlined mas-communication--outlined';
        break;
      case 'password':
        icon = 'mas-lock-key-outlined mas-security-and-warnings--outlined';
        break;
      case 'tel':
        icon = 'mas-phone-outlined mas-communication--outlined';
        break;
    }
    return icon;
  }
  get trailingIcon(): string {
    return this.type === 'password' ? 'mas-eye-filled mas-design--filled' : 'none';
  }
  protected onChangeHandler = (_: any) => {};
  protected onTouchedHandler = () => {};
  writeValue(obj: any): void {
    this.value = obj;
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
    if (this.formControl) {
      this.formControl.setValue(newModelValue);
    }
    this.onChange.emit({ value: newModelValue, originalEvent: event });
  }
  _onChange(event: Event) {
    this.updateModel(event);
  }
  _onFocus(isFocused: boolean) {
    if (isFocused !== this.focused) {
      this.focused = isFocused;
    }
  }
  showPassword(input: HTMLElement) {
    if (input.getAttribute('type') === 'password') {
      input.setAttribute('type', 'text');
    } else {
      input.setAttribute('type', 'password');
    }
  }
  ngAfterViewInit(): void {
    if (this.focused) {
      this.inputViewChild?.nativeElement.focus();
    }
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
