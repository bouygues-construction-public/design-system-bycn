import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-toggle',
  template: `
    <form [formGroup]="formGroup">
      <mas-toggle-button labelText="Toggle" formControlName="toggleButton"></mas-toggle-button>
    </form>

    <br />
    <button
      (click)="toggle()"
      style="background-color: orange; border: solid 1px black; border-radius: 4px; padding: 2px; margin-right:10px "
    >
      Toggle
    </button>
    <button
      (click)="disableToggle()"
      style="background-color: orange; border: solid 1px black; border-radius: 4px; padding: 2px"
    >
      Disable toggle
    </button>
  `,
})
export class ToggleButtonExample implements OnInit {
  public formGroup: FormGroup;

  constructor(protected formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      toggleButton: this.formBuilder.control(true),
    });
  }
  toggle() {
    const toggle = this.formGroup.get('toggleButton');
    console.log(toggle);
    if (toggle !== null) {
      toggle.setValue(!toggle.value);
    }
  }
  disableToggle() {
    const toggle = this.formGroup.get('toggleButton');
    console.log(toggle);
    if (toggle !== null) {
      toggle.disabled ? toggle.enable() : toggle.disable();
    }
  }
}
