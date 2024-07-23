import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  template: `
    <form [formGroup]="formGroup">
      <mas-label [optional]="true" [infoIcon]="true">Label text</mas-label>
      <mas-input-dropdown [invalid]="false" placeholder="Placeholder Text" formControlName="select" [multi]="false">
        <mas-dropdown-option value="option1">Option 1</mas-dropdown-option>
        <mas-dropdown-option value="option2">Option 2</mas-dropdown-option>
        <mas-dropdown-option value="option3">Option 3</mas-dropdown-option>
      </mas-input-dropdown>
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
export class InputDropdownExample implements OnInit {
  public formGroup: FormGroup;
  public select: any;
  constructor(protected formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      select: this.formBuilder.control('', [Validators.required]),
    });
  }
  toggleClear() {
    const select = this.formGroup.get('select');
    if (select !== null) {
      select.setValue('option1');
    }
  }
  toggleDisable() {
    const select = this.formGroup.get('select');
    this.formGroup.disabled ? select?.enable() : select?.disable();
  }
}
