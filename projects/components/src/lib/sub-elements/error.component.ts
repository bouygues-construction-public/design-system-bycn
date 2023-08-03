import { Component, NgModule, Input, OnInit, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import '@masoni/css-sub-elements/dist/index.css';
@Component({
  selector: 'mas-error',
  host: {
    class: 'mas-error',
    role: 'alert',
  },
  template: `
    <i class="mas-icon mas-warningcircle-filled"></i>
    <ng-content *ngIf="!isTemplate(errorMessage)"></ng-content>
    <ng-template *ngIf="isTemplate(errorMessage)" [ngTemplateOutlet]="errorMessage"></ng-template>
  `,
})
export class MasError {
  @Input() errorMessage: any | TemplateRef<any>;
  public isTemplate(value: any) {
    return value instanceof TemplateRef;
  }
}
@NgModule({
  declarations: [MasError],
  imports: [CommonModule, FormsModule],
  exports: [MasError],
})
export class MasErrorModule {}
