import { Component, Input } from '@angular/core';

@Component({
  host: {
    class: 'mas-linear-progress-bar',
    '[class.mas-linear-progress-bar_type--inline]': 'type === "inline"',
    '[class.mas-linear-progress-bar_size--small]': 'size === "small"',
    '[class.mas-linear-progress-bar_size--medium]': 'size === "medium"',
    '[class.mas-linear-progress-bar_state--active]': 'state === "active"',
    '[class.mas-linear-progress-bar_state--success]': 'state === "success"',
    '[class.mas-linear-progress-bar_state--error]': 'state === "error"',
  },
  selector: 'mas-linear-progress-bar',
  template: `
    <div class="mas-linear-progress-bar_label">
      <span class="label">{{ label }}</span>
      <i *ngIf="state === 'success'" class="mas-icon mas-check-circle-filled mas-system-and-device--filled"></i>
      <i *ngIf="state === 'error'" class="mas-icon mas-prohibit-inset-filled mas-security-and-warnings--filled"></i>
    </div>
    <div *ngIf="state === 'active' || type !== 'inline'" class="mas-linear-progress-bar_wrapper">
      <div class="mas-linear-progress-bar_inner" [style.width.%]="value"></div>
    </div>
    <span class="mas-linear-progress-bar_helper" *ngIf="helper && type !== 'inline'">{{ helper }}</span>
  `,
})
export class MasLinearProgressBar {
  /**
   * The type of the progress bar.
   */
  @Input() type: 'default' | 'inline' = 'default';
  /**
   * The size of the linear progress bar. Available options: 'small', 'medium'. Default: 'medium'.
   */
  @Input() size: 'small' | 'medium' = 'medium';
  /**
   * Current progress value (percentage).
   */
  @Input() value: number = 0;
  /**
   * State of the progress bar: Available options: 'active', 'success', or 'error'. Default: 'active'.
   */
  @Input() state: 'active' | 'success' | 'error' = 'active';
  /**
   * Label displayed above the progress bar.
   */
  @Input() label: string = '';
  /**
   * Helper text displayed below the progress bar (optional).
   */
  @Input() helper: string = '';
}
