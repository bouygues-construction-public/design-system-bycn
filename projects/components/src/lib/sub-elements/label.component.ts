import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'mas-label',
  host: {
    class: 'mas-label',
  },
  template: `
    <label [for]="identifier" class="mas-label-wrapper">
      <ng-content></ng-content>
      <ng-container *ngIf="infoIcon">
        <i class="mas-question-outlined mas-label-info-icon mas-security-and-warnings--outlined"></i>
      </ng-container>
      <ng-container *ngIf="optional">
        <span class="mas-label-optional">(optional)</span>
      </ng-container>
    </label>
  `,
})
export class MasLabel implements OnInit {
  private _identifier: string;

  @Input() optional: boolean = false;
  @Input() infoIcon: boolean = false;
  @Input()
  get identifier(): string {
    return this._identifier;
  }
  set identifier(value: string) {
    this._identifier = value;
  }

  constructor() {}

  ngOnInit() {}
}

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [MasLabel],
  declarations: [MasLabel],
})
export class MasLabelModule {}
