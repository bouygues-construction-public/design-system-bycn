import { Component, NgModule, Input, OnInit, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'mas-helper',
  host: {
    class: 'mas-helper',
  },
  template: `
    <ng-content *ngIf="!isTemplate(helperText)"></ng-content>
    <ng-template *ngIf="isTemplate(helperText)" [ngTemplateOutlet]="helperText"></ng-template>
  `,
})
export class MasHelper {
  @Input() helperText: any | TemplateRef<any>;
  public isTemplate(value: any) {
    return value instanceof TemplateRef;
  }
}
@NgModule({
  declarations: [MasHelper],
  imports: [CommonModule, FormsModule],
  exports: [MasHelper],
})
export class MasHelperModule {}
