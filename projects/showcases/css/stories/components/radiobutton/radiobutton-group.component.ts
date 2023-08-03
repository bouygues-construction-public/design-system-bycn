import { Component, NgModule, OnInit, Input } from '@angular/core';
import { MasRadioButtonModule } from 'projects/components/src/lib/radiobutton/radiobutton.module';
import { CommonModule } from '@angular/common';
import '@masoni/css-radio-button/dist/index.css';

@Component({
  selector: 'app-radio-group',
  template: `
    <form>
      <mas-radio-group formControlName="option">
        <mas-radio-button
          value="option 1"
          [identifier]="'my-radio-button_1'"
          [labelText]="'Option 1'"
          [disabled]="disabled"
          [size]="size"
        >
        </mas-radio-button>
        <mas-radio-button
          value="option 2"
          [identifier]="'my-radio-button_2'"
          [labelText]="'Option 2'"
          [disabled]="disabled"
          [size]="size"
        >
        </mas-radio-button>
        <mas-radio-button
          value="option 3"
          [identifier]="'my-radio-button_3'"
          [labelText]="'Option 3'"
          [disabled]="disabled"
          [size]="size"
        >
        </mas-radio-button>
      </mas-radio-group>
    </form>
  `,
})
export class RadioButtonGroupComponent {
  @Input() size: 'S' | 'L' = 'S';
  @Input() disabled: boolean = false;
}

@NgModule({
  imports: [MasRadioButtonModule, CommonModule],
  declarations: [RadioButtonGroupComponent],
  exports: [RadioButtonGroupComponent],
})
export class RadioButtonGroupModule {}
