import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  template: `
    <form [formGroup]="formGroup">
    <mas-label [optional]="true" [infoIcon]="true">Label text</mas-label>
      <mas-select [invalid]="false" placeholder="Placeholder Text" formControlName="select">
        <mas-option value="option1">Option 1</mas-option>
        <mas-option value="option2">Option 2</mas-option>
        <mas-option value="option3">Option 3</mas-option>
      </mas-select>
    </form>
    <br />
    <div style="display: flex; ">
      <button
        (click)="toggleClear()"
        style="background-color: orange; border: solid 1px black; border-radius: 4px; padding: 2px; margin-right:10px "
      >
        Clear
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
export class SelectExample implements OnInit {
  public formGroup: FormGroup;
  constructor(protected formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      select: this.formBuilder.control('option3', [Validators.required]),
    });
  }
  toggleClear() {
    const select = this.formGroup.get('select');
    if (select != null) {
      select.setValue('option1');
    }
  }
  toggleDisable() {
    const select = this.formGroup.get('select');
    if (select != null) {
      select.disabled ? select.enable() : select.disable();
    }
  }
}
