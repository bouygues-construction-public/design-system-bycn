import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  template: `
    <form [formGroup]="formGroup">
      <mas-radio-group formControlName="radioGroup" disabled="true">
        <mas-radio-button labelText="Radio Button 1" value="1" [disabled]="formGroup.disabled"></mas-radio-button>
        <mas-radio-button labelText="Radio Button 2" value="2" [disabled]="formGroup.disabled"></mas-radio-button>
        <mas-radio-button labelText="Radio Button 3" value="3" [disabled]="formGroup.disabled"></mas-radio-button>
      </mas-radio-group>
    </form>
    <br />
    <div style="display: flex;">
      <button
        style="padding: 2px; background-color: orange; margin-right: 10px; border: solid 1px black; border-radius: 4px;"
        (click)="toggleRadio()"
      >
        Set to '2'
      </button>
      <button
        style="padding: 2px; background-color: orange; border: solid 1px black; border-radius: 4px;"
        (click)="toggleDisable()"
      >
        Toggle disabled state
      </button>
    </div>
  `,
})
export class RadioButtonExample implements OnInit {
  public formGroup: FormGroup;
  constructor(protected formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      radioGroup: new FormControl(),
    });
  }
  toggleRadio() {
    const radioGroup = this.formGroup.get('radioGroup');
    if (radioGroup !== null) {
      radioGroup.setValue('2');
    }
  }
  toggleDisable() {
    const radioGroup = this.formGroup.get('radioGroup');
    if (radioGroup !== null) {
      radioGroup.disabled ? radioGroup.enable() : radioGroup.disable();
    }
  }
}
