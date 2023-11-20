import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'mas-badge',
  template: ` <i
      class="{{ icon }} mas-badge-icon"
      [ngClass]="{
        'mas-badge--small': size === 'S',
        'mas-badge--medium': size === 'M',
        'mas-badge--large': size === 'L'
      }"
    ></i>
    <span
      class="mas-badge"
      [ngClass]="{
      'mas-badge-color--success': color === 'success',
      'mas-badge-color--warning': color === 'warning',
      'mas-badge-color--alert': color === 'alert',
      'mas-badge-color--primary': color === 'primary',
      'mas-badge-color--brand': color === 'brand',
      'mas-badge-type--dot': type === 'dot',
      'mas-badge-type--number': type === 'number'
    }"
      >{{ numberToString(number) }}</span
    >`,
  host: {
    '[class.mas-badge--with-icon]': 'icon !== ""',
  },
})
export class MasBadge {
  @Input() number: number = 0;
  @Input() type: 'number' | 'dot' = 'dot';
  @Input() icon: string = '';
  @Input() size: 'S' | 'M' | 'L' = 'M';
  @Input() color: 'success' | 'warning' | 'alert' | 'primary' | 'brand' = 'primary';

  numberToString(value: number): string {
    if (value <= 0 || this.size === 'S' || this.type === 'dot') {
      this.type = 'dot'
      return '';
    }
    if (value > 99) {
      return '99+';
    }
    return `${value}`;
  }
}
