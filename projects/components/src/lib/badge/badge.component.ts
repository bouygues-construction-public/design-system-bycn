import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mas-badge',
  template: ` <i class="{{ icon }}"></i>
    <span
      class="mas-badge"
      [ngClass]="{
      'mas-badge--small': size === 'S',
      'mas-badge--medium': size === 'M',
      'mas-badge--large': size === 'L',
      'mas-badge-color--success': color === 'success',
      'mas-badge-color--warning': color === 'warning',
      'mas-badge-color--alert': color === 'alert',
      'mas-badge-color--primary': color === 'primary',
      'mas-badge-color--brand': color === 'brand',
    }"
      ><ng-container *ngIf="type === 'number'">{{ number }}</ng-container></span
    >`,
  host: {
    '[class.mas-badge--with-icon]': 'icon === ""',
  },
})
export class MasBadge {
  protected _number: number = 0;
  @Input()
  get number(): string {
    if (this._number <= 0 || this.size === 'S') {
      this.type = 'dot';
      return '';
    }
    if (this._number > 99) {
      return '99+';
    }
    return `${this._number}`;
  }
  set number(value: number) {
    if (value !== null) {
      this.number = value;
    }
  }
  @Input() type: 'number' | 'dot' = 'dot';
  @Input() icon: string = '';
  @Input() size: 'S' | 'M' | 'L' = 'M';
  @Input() color: 'success' | 'warning' | 'alert' | 'primary' | 'brand' = 'primary';
}
