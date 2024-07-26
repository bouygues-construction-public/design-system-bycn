import { Component, Input } from '@angular/core';

@Component({
  selector: 'mas-button',
  template: `
    <button [class]="classes" [disabled]="disabled">
      <i
        *ngIf="!iconAlone && iconLeft"
        class="mas-icon mas-icon-left {{ iconLeft }}"></i>
      <i *ngIf="iconAlone" class="mas-icon mas-icon-alone {{ iconAlone }}"></i>
      <ng-content *ngIf="!iconAlone"></ng-content>
      <i
        *ngIf="!iconAlone && iconRight"
        class="mas-icon mas-icon-right {{ iconRight }}"></i>
    </button>
  `,
})
export class MasButton {
  @Input() variant: 'primary' | 'secondary' | 'tertiary' | 'accent' = 'primary';
  @Input() size: 'small' | 'medium' = 'medium';
  @Input() disabled: boolean = false;
  @Input() iconLeft: string | null = null;
  @Input() iconRight: string | null = null;
  @Input() iconAlone: string | null = null;

  get classes(): { [key: string]: boolean } {
    return {
      'mas-btn': true,
      [`mas-btn_variant--${this.variant}`]: true,
      [`mas-btn_size--${this.size}`]: true,
      'mas-btn--icon-left': !this.isEmpty(this.iconLeft),
      'mas-btn--icon-right': !this.isEmpty(this.iconRight),
      'mas-btn--icon-alone': !this.isEmpty(this.iconAlone),
    };
  }

  isEmpty(str: string | null) {
    return !str || str.length == 0;
  }
}
