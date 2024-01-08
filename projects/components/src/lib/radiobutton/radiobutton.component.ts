import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioButtonClickEvent } from './radio-change';
import '@masoni/css-radio-button/dist/index.css';

@Component({
  selector: 'mas-radio-button',
  templateUrl: 'radiobutton.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef((): any => MasRadioButton),
      multi: true,
    },
  ],
})
export class MasRadioButton {
  @Input() labelText: string = '';
  @Input() identifier: string = '';
  @Input() name: string | undefined;
  @Input() checked: boolean = false;
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
  protected _disabled: boolean = false;
  @Input() value: any = null;
  @Input() size: 'S' | 'L' = 'S';
  @Input() formControlName: string | undefined;
  @Output() change: EventEmitter<RadioButtonClickEvent> = new EventEmitter<RadioButtonClickEvent>();
  @Output() onFocus: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() onBlur: EventEmitter<Event> = new EventEmitter<Event>();
  @ViewChild('rbutton') inputViewChild!: ElementRef;
  public radioChangeHandler: Function = (event: RadioButtonClickEvent) => {};
  public focused: any;
  constructor(public cd: ChangeDetectorRef) {}

  onClick(event: Event) {
    if (!this.disabled) {
      this.inputViewChild.nativeElement.checked = true;
      this.checked = this.inputViewChild.nativeElement.checked;
      this.radioChangeHandler({ originalEvent: event, value: this.value, source: this });
      this.change.emit({ originalEvent: event, value: this.value, source: this });
    }
  }
  registerRadioChangeHandler(fn: (event: RadioButtonClickEvent) => void) {
    this.radioChangeHandler = fn;
  }
  onChange(event: Event) {
    this.onClick(event);
  }
  public focus() {
    this.inputViewChild.nativeElement.focus();
  }
  onInputFocus(event: Event) {
    this.focused = true;
    this.onFocus.emit(event);
  }
  onInputBlur(event: Event) {
    this.focused = false;
    this.onBlur.emit(event);
  }
}
