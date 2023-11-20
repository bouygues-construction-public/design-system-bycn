import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  forwardRef,
} from '@angular/core';
import { MasRadioButton } from './radiobutton.component';
import { RadioButtonClickEvent } from './radio-change';

@Component({
  selector: 'mas-radio-group',
  template: `
    <div class="mas-radio-group">
      <ng-content></ng-content>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MasRadioGroup,
      multi: true,
    },
  ],
})
export class MasRadioGroup implements ControlValueAccessor, AfterContentInit, AfterViewInit {
  static radioCount = 0;
  @Output() change: EventEmitter<RadioButtonClickEvent> = new EventEmitter<RadioButtonClickEvent>();
  @ContentChildren(forwardRef((): any => MasRadioButton)) radios?: QueryList<MasRadioButton>;
  @Input()
  set name(value: string) {
    this._name = value;
    this.updateRadios();
  }
  get name(): string {
    return this._name;
  }
  @Input()
  set disabled(value: boolean) {
    this._disabled = value;
  }
  get disabled(): boolean {
    return this._disabled;
  }
  protected _disabled: boolean = false;
  protected _name: string = `radio-group-${MasRadioGroup.radioCount++}`;
  protected _selected: MasRadioButton | null = null;
  protected _value: any = null;
  @Input()
  set selected(selected: MasRadioButton | null) {
    const alreadySelected = (this._selected && this._selected.value) === (selected && selected.value);
    if (alreadySelected) {
      return;
    }
    if (this._selected) {
      this._selected.checked = false;
    }
    this._selected = selected;
    this.value = selected ? selected.value : null;
    this.checkSelectedRadio();
  }
  get selected() {
    return this._selected;
  }
  @Input()
  set value(newValue: any) {
    if (this._value !== newValue) {
      this._value = newValue;
      this.updateSelectedRadioFromValue();
      this.checkSelectedRadio();
    }
  }
  get value() {
    return this._value;
  }
  checkSelectedRadio() {
    if (this.selected && !this._selected!.checked) {
      this.selected.checked = true;
    }
  }
  updateSelectedRadioFromValue() {
    let alreadySelected = this._selected !== null && this._selected.value === this._value;
    if (!alreadySelected && this.radios) {
      if (this.selected && this.value) {
        this.selected!.checked = false;
      }
      this._selected = null;
      this.radios?.forEach((radio) => {
        if (radio.checked || radio.value === this._value) {
          this._selected = radio;
        }
      });
      if (this.selected && !this.value) {
        this._value = this.selected.value;
      }
    }
  }
  protected updateRadioChangeHandler() {
    this.radios?.forEach((radio) => {
      radio.registerRadioChangeHandler((event: RadioButtonClickEvent) => {
        if ((this.selected && this.selected.value) === event.value) {
          return;
        }
        if (this.selected) {
          this.selected.checked = false;
        }
        this._selected = event.source;
        this._value = event.value;
        this.change.emit(event);
        this._controlValueAccessorChangeFn(event.value);
        this._onTouched();
      });
    });
  }
  updateRadios() {
    if (this.radios) {
      setTimeout(() => {
        this.radios!.forEach((radio) => {
          radio.name = this.name;
          radio.checked = this.value === radio.value
        });
      });
    }
  }
  ngAfterContentInit() {
    this.radios!.changes.subscribe(() => {
      this.updateRadios();
      this.updateRadioChangeHandler();
    });
    this.updateRadioChangeHandler();
  }
  ngAfterViewInit() {
    this.updateRadios();
  }
  public onModelChange: Function = () => {};
  public onModelTouched: Function = () => {};
  writeValue(value: any): void {
    this.value = value;
    this.updateSelectedRadioFromValue();
    this.checkSelectedRadio();
  }
  private _controlValueAccessorChangeFn: (value: any) => void = () => {};
  _onTouched: () => any = () => {};
  registerOnChange(fn: any): void {
    this._controlValueAccessorChangeFn = fn;
  }
  registerOnTouched(fn: any) {
    this._onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  @Input() label?: string;
}
