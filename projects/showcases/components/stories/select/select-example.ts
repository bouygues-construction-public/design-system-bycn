import { Component, Input, NgModule, OnInit } from '@angular/core';
import { MasSelectModule } from 'projects/components/src/lib/select/select.module';

@Component({
  selector: 'app-select',
  template: `
    <mas-select [label]="arg.label" [helperText]="arg.helperText" [errorMessage]="arg.errorMessage" [invalid]="true" [disabled]="false" [placeholder]="'Select your option'">
      <mas-option value="option1">Option 1</mas-option>
      <mas-option value="option2">Option 2</mas-option>
      <mas-option value="option3">Option 3</mas-option>
    </mas-select>
    <br />

    label: {{ arg.label }}
  `,
})
export class SelectExample implements OnInit {
  @Input() arg: any;
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  imports: [MasSelectModule],
  exports: [SelectExample],
  declarations: [SelectExample],
})
export class SelectExampleModule {}
