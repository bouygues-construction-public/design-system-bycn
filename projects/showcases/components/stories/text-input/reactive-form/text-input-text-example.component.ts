import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  template: `
    <form [formGroup]="formGroup">
      <mas-text-input
        labelText="Label"
        placeholder="Placeholder Text"
        formControlName="textInput"
        type="email"
      >
        <mas-label [optional]="true" [infoIcon]="true">Label text</mas-label>
        <mas-error>Somethig went wrong</mas-error>
        <mas-helper>Type here...</mas-helper>
      </mas-text-input>
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
export class TextInputExample implements OnInit {
  public formGroup: FormGroup;
  constructor(protected formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      textInput: this.formBuilder.control('Your input', [Validators.required, Validators.email]),
    });
  }
  toggleClear() {
    const textInput = this.formGroup.get('textInput');
    if (textInput != null) {
      textInput.setValue('');
    }
  }
  toggleDisable() {
    const textInput = this.formGroup.get('textInput');
    if (textInput != null) {
      textInput.disabled ? textInput.enable() : textInput.disable();
    }
  }
}
