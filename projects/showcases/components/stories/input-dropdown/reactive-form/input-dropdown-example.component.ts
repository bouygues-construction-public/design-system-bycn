


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-dropdown',
  template: `
    <form [formGroup]="formGroup">
    </div>
  `,
})
export class InputDropdownExample implements OnInit {
  public formGroup: FormGroup;
  constructor(protected formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      dropdown: this.formBuilder.control(null, [Validators.required]),
    });
  }
}
