import { Component, Input } from '@angular/core';

@Component({
  selector: 'mas-button',
  template: `
    <button [class]="classes" [disabled]="disabled">
      <i *ngIf="!iconAlone && iconLeft" class="mas-icon mas-icon-left {{ iconLeft }}"></i>
      <i *ngIf="iconAlone" class="mas-icon mas-icon-alone {{ iconAlone }}"></i>
      <span *ngIf="!iconAlone" class="mas-button_label">
        <ng-content></ng-content>
      </span>
      <i *ngIf="!iconAlone && iconRight" class="mas-icon mas-icon-right {{ iconRight }}"></i>
    </button>
  `,
})
export class MasButton {
  /**
   * The variant of the button including 'primary' | 'secondary' | 'tertiary' | 'accent'.
   */
  @Input() variant: 'primary' | 'secondary' | 'tertiary' | 'accent' = 'primary';
  /**
   * The size of the button. Available options: 'small', 'medium'. Default: 'medium'.
   */
  @Input() size: 'small' | 'medium' = 'medium';
  /**
   * Whether the button should be disabled. Default: false.
   */
  @Input() disabled: boolean = false;
  /**
   * The name of the icon to display on the left side of the button. 
   */
  @Input() iconLeft: string | null = null;
  /**
   * The name of the icon to display on the right side of the button.
   */
  @Input() iconRight: string | null = null;
  /**
   * The name of the icon to display as the sole content of the button.
   */
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
