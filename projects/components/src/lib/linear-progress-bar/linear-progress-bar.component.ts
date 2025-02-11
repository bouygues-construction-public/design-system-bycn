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
    <ng-container *ngIf="type === 'default'; else inlineBlock">
      <div class="mas-linear-progress-bar_label">
        <span class="label">{{ label }}</span>
        <i *ngIf="state === 'active'" class="mas-icon mas-arrows-counter-clockwise-filled mas-arrows--filled"></i>
        <i *ngIf="state === 'success'" class="mas-icon mas-check-circle-filled mas-system-and-device--filled"></i>
        <i *ngIf="state === 'error'" class="mas-icon mas-math-and-finance--filled mas-x-circle-filled"></i>
      </div>
      <div class="mas-linear-progress-bar_wrapper">
        <div class="mas-linear-progress-bar_inner" [style.width.%]="value"></div>
      </div>
      <span class="mas-linear-progress-bar_helper" *ngIf="helper && type === 'default'">{{ helper }}</span>
    </ng-container>
    <ng-template #inlineBlock>
      <div class="mas-linear-progress-bar_label">
        <span class="label">{{ label }}</span>
        <div class="mas-linear-progress-bar_wrapper">
          <div class="mas-linear-progress-bar_inner" [style.width.%]="value"></div>
        </div>
        <i *ngIf="state === 'active'" class="mas-icon mas-arrows-counter-clockwise-filled mas-arrows--filled"></i>
        <i *ngIf="state === 'success'" class="mas-icon mas-check-circle-filled mas-system-and-device--filled"></i>
        <i *ngIf="state === 'error'" class="mas-icon mas-math-and-finance--filled mas-x-circle-filled"></i>
      </div>
      <span class="mas-linear-progress-bar_helper" *ngIf="helper && type === 'default'">{{ helper }}</span>
    </ng-template>
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
