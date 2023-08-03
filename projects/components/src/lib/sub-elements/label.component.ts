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
      <i *ngIf="infoIcon" class="mas-question-outlined mas-label-info-icon"></i>
      <span *ngIf="optional" class="mas-label-optional">(optional)</span>
    </label>
  `,
})
export class MasLabel implements OnInit {
  @Input()
  get identifier(): string {
    return this._identifier;
  }
  set identifier(value: string) {
    this._identifier = value;
  }
  private _identifier: string;
  @Input() optional: boolean = false;
  @Input() infoIcon: boolean = false;
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [MasLabel],
  declarations: [MasLabel],
})
export class MasLabelModule {}
