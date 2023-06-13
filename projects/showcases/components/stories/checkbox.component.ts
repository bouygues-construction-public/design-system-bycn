import { Component, Input, OnInit } from '@angular/core';
import '@masoni/css-checkbox/dist/index.css';

@Component({
  selector: 'mas-checkbox',
  templateUrl: 'checkbox.component.html',
})
export class MasCheckbox implements OnInit {
  @Input() labelText: string = '';
  @Input() identifier: string = '';

  @Input() size: 'S' | 'L' = 'S';

  @Input()
  get checked(): boolean {
    return this._checked;
  }
  set checked(value: boolean) {
    const checked = value;
    if (checked != this.checked) {
      this._checked = checked;
    }
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
    const changed = value != this._indeterminate;
    this._indeterminate = value;
  }
  get indeterminate(): boolean {
    return this._indeterminate;
  }
  private _indeterminate: boolean = false;

  constructor() {}
  _onInputClick() {}
  ngOnInit() {}
}
