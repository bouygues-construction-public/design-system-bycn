import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  template: `
    <form [formGroup]="formGroup">
      <mas-checkbox labelText="label Text" formControlName="checkbox"></mas-checkbox>
    </form>
    <br />

    <div style="display: flex; ">
      <button
        (click)="toggleCheckbox()"
        style="background-color: orange; border: solid 1px black; border-radius: 4px; padding: 2px; margin-right:10px "
      >
        Check
      </button>
      <br />
      <button
        (click)="toggleDisable()"
        style="background-color: orange; border: solid 1px black; border-radius: 4px; padding: 2px"
      >
        Toggle disabled state
      </button>
    </div>
  `,
})
export class CheckboxExample implements OnInit {
  public formGroup: FormGroup;
  constructor(protected formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      checkbox: this.formBuilder.control(false),
    });
  }
  toggleCheckbox() {
    const checkbox = this.formGroup.get('checkbox');
    if (checkbox !== null) {
      checkbox.setValue(!checkbox.value);
    }
  }
  toggleDisable() {
    const checkbox = this.formGroup.get('checkbox');
    if (checkbox !== null) {
      checkbox.disabled ? checkbox.enable() : checkbox.disable();
    }
  }
}
