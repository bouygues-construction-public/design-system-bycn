import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'mas-badge',
  template: `
    <i *ngIf="icon !== ''" class="{{ icon }} mas-badge_icon"></i>
    <ng-container *ngIf="type !== 'dot'">
      <span
        [ngClass]="{
      'mas-badge_content': true,
      'mas-badge_color--success': color === 'success',
      'mas-badge_color--warning': color === 'warning',
      'mas-badge_color--alert': color === 'alert',
      'mas-badge_color--primary': color === 'primary',
      'mas-badge_color--brand': color === 'brand',
      'mas-badge_type--number': type === 'number',
      'mas-badge_type--number-minor': number < 10,
    }"
        >{{ numberToString(number) }}</span
      >
    </ng-container>
  `,
  host: {
    class: 'mas-badge',
    '[class.mas-badge_type--dot]': "type === 'dot'",
    '[class.mas-badge--with-icon]': 'icon !== ""',
    '[class.mas-badge_size--small]': 'size === "small"',
    '[class.mas-badge_size--medium]': 'size === "medium"',
    '[class.mas-badge_size--large]': 'size === "large"',
  },
})
export class MasBadge {
  @Input() number: number = 0;
  @Input() type: 'number' | 'dot' = 'dot';
  @Input() icon: string = '';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() color: 'success' | 'warning' | 'alert' | 'primary' | 'brand' = 'primary';

  numberToString(value: number): string {
    if (value <= 0 || this.size === 'small' || this.type === 'dot') {
      this.type = 'dot';
      return '';
    }
    if (value > 99) {
      return '99+';
    }
    return `${value}`;
  }
}
