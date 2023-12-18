import { Component, Input } from '@angular/core';

@Component({
  selector: 'mas-icon-button',
  template: `
    <button [class]="classes" [disabled]="disabled">
      <i class="mas-icon mas-icon-alone {{ iconAlone }}"></i>
    </button>
  `,
})
export class MasIconButton {
  @Input() variant: 'primary' | 'secondary' | 'tertiary' | 'accent' = 'primary';
  @Input() size: 'small' | 'medium' = 'medium';
  @Input() disabled: boolean = false;
  @Input() iconAlone: string | null = null;

  get classes(): { [key: string]: boolean } {
    return {
      'mas-icon-button': true,
      [`mas-icon-button_variant--${this.variant}`]: true,
      [`mas-icon-button_size--${this.size}`]: true,
      'mas-icon-button--icon-alone': !this.isEmpty(this.iconAlone),
    };
  }

  isEmpty(str: string | null) {
    return !str || str.length == 0;
  }
}
