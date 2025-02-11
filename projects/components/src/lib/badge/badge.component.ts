import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'mas-badge',
  template: `
    <ng-container *ngIf="type !== 'dot'">
      <span class="mas-badge_content">{{ numberToString(number) }}</span>
    </ng-container>
  `,
  host: {
    class: 'mas-badge',
    '[class.mas-badge_type--dot]': "type === 'dot'",
    '[class.mas-badge_type--number]': "type === 'number'",
    '[class.mas-badge_size--small]': 'size === "small"',
    '[class.mas-badge_size--large]': 'size === "large"',
    '[class.mas-badge_color--success]': "color === 'success'",
    '[class.mas-badge_color--warning]': "color === 'warning'",
    '[class.mas-badge_color--alert]': "color === 'alert'",
    '[class.mas-badge_color--primary]': "color === 'primary'",
    '[class.mas-badge_color--brand]': "color === 'brand'",
    '[class.mas-badge_type--number-minor]': 'number < 10',
  },
})
export class MasBadge {
  @Input() number: number = 0;
  @Input() type: 'number' | 'dot' = 'dot';
  @Input() size: 'small' | 'large' = 'small';
  @Input() color: 'success' | 'warning' | 'alert' | 'primary' | 'brand' = 'primary';

  numberToString(value: number): string {
    if (value <= 0 || this.size === 'small' || this.type === 'dot') {
      this.type = 'dot';
      this.size = 'small';
      return '';
    }
    if (value > 99) {
      return '99+';
    }
    return `${value}`;
  }
}
