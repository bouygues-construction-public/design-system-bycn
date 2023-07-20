import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasCheckboxModule } from 'projects/components/src/lib/checkbox/checkbox.module';

@Component({
  selector: 'app-checkbox',
  template: `
    <div *ngFor="let arg of checkboxes">
      <mas-checkbox
        [labelText]="arg.labelText"
        [identifier]="arg.identifier"
        [checked]="arg.checked"
        [disabled]="arg.disabled"
        [indeterminate]="arg.indeterminate"
        [size]="arg.size"
        [formControl]="arg.formControl"
      >
      </mas-checkbox>
    </div>
  `,
})
export class Checkboxes {
  @Input() checkboxes: any[] = [];
}
@NgModule({
  imports: [MasCheckboxModule, CommonModule],
  declarations: [Checkboxes],
  exports: [Checkboxes],
})
export class CheckboxesModule {}
