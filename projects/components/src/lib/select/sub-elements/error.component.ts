import { Component, NgModule, Input, OnInit, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import '@masoni/css-sub-elements/dist/index.css';
@Component({
  selector: 'mas-error',
  template: `
    <div *ngIf="display && errorMessage" role="alert" class="mas-error">
      <ng-container *ngIf="!isTemplate(errorMessage)">{{ errorMessage }}</ng-container>
      <ng-template *ngIf="isTemplate(errorMessage)" [ngTemplateOutlet]="errorMessage"></ng-template>
    </div>
  `,
})
export class MasError {
  @Input() display: boolean = false;
  @Input() errorMessage: any | TemplateRef<any>; // ! can be TemplateRef
  public isTemplate(value: any) {
    return value instanceof TemplateRef; // ? what's this ?
  }
}
@NgModule({
  declarations: [MasError],
  imports: [CommonModule, FormsModule],
  exports: [MasError],
})
export class MasErrorModule {}
