import { Component, Input, NgModule, OnInit } from '@angular/core';
import { MasSelectModule } from 'projects/components/src/lib/select/select.module';

@Component({
  selector: 'app-select',
  template: `
    <mas-select
      [label]="label"
      [helperText]="helperText"
      [errorMessage]="errorMessage"
      [invalid]="invalid"
      [disabled]="disabled"
      [placeholder]="placeholder"
      [size]="size"
    >
      <mas-option value="option1">Option 1</mas-option>
      <mas-option value="option2">Option 2</mas-option>
      <mas-option value="option3">Option 3</mas-option>
    </mas-select>
    <br />
  `,
})
export class SelectExample implements OnInit {
  @Input() label: string;
  @Input() helperText: string;
  @Input() errorMessage: string;
  @Input() invalid: boolean = false;
  @Input() disabled: boolean = false;
  @Input() placeholder: string;
  @Input() size: 'S' | 'M' = 'S';
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  imports: [MasSelectModule],
  exports: [SelectExample],
  declarations: [SelectExample],
})
export class SelectExampleModule {}
