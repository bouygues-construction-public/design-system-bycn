import { Component, NgModule, Input, OnInit, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import '@masoni/css-sub-elements/dist/index.css';
@Component({
  selector: 'mas-helper',
  template: `
    <div *ngIf="helperText && display" class="mas-helper">
      <ng-container *ngIf="!isTemplate(helperText)">{{ helperText }}</ng-container>
      <ng-template *ngIf="isTemplate(helperText)" [ngTemplateOutlet]="helperText"></ng-template>
    </div>
  `,
})
export class MasHelper {
  @Input() display: boolean = false;
  @Input() helperText: any | TemplateRef<any>; // ! can be TemplateRef
  public isTemplate(value: any) {
    return value instanceof TemplateRef; // ? what's this ?
  }
}
@NgModule({
  declarations: [MasHelper],
  imports: [CommonModule, FormsModule],
  exports: [MasHelper],
})
export class MasHelperModule {}
