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
  /**
   * Whether the button should be disabled. Default: false.
   */
  @Input() variant: 'primary' | 'secondary' | 'tertiary' | 'neutral' = 'primary';
  /**
   * The size of the button. Available options: 'small', 'medium', 'large'. Default: 'medium'.
   */
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  /**
   * Whether the button should be disabled. Default: false.
   */
  @Input() disabled: boolean = false;
  @Input() iconAlone: string | null = null;
  /**
   * Button shape, Default: 'square'
   */
  @Input() shape: 'square' | 'rounded' = 'square';

  get classes(): { [key: string]: boolean } {
    return {
      'mas-icon-button': true,
      [`mas-icon-button_variant--${this.variant}`]: true,
      [`mas-icon-button_size--${this.size}`]: true,
      'mas-icon-button--icon-alone': !this.isEmpty(this.iconAlone),
      [`mas-icon-button_shape--${this.shape}`]: true
    };
  }

  isEmpty(str: string | null) {
    return !str || str.length == 0;
  }
}
