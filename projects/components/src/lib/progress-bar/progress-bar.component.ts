import { Component, Input } from '@angular/core'; 
import '@masoni/css-progress-bar/dist/index.css';

@Component({
  selector: 'mas-progress-bar',
  template: `
      <div class="mas-progress-bar" [ngClass]="{
                                  'inline': type === 'inline',
                                  'small': size === 'small',
                                  'active': state === 'active',
                                  'success': state === 'success',
                                  'error': state === 'error'
                                }">
        <div class="mas-progress-bar-label">
          <div class="label">{{ label }}</div> 
          <i *ngIf="state === 'success'" class="mas-icon mas-check-circle-filled mas-system-and-device--filled"></i>
          <i *ngIf="state === 'error'" class="mas-icon mas-prohibit-inset-filled mas-security-and-warnings--filled"></i>
        </div>
        <div *ngIf="state === 'active' || type !== 'inline'" class="mas-progress-wrapper">
          <div class="mas-progress-bar-inner" [style.width.%]="value"></div>
        </div>
        <div class="helper" *ngIf="helper && type !== 'inline'">{{ helper }}</div>
      </div>
  `
})

export class MasProgressBar {
  @Input() type: 'default' | 'inline' = 'default';
  @Input() size: 'small' | 'large' = 'large';
  @Input() value: number = 0;
  @Input() state: 'active' | 'success' | 'error' = 'active';
  @Input() label: string = '';
  @Input() helper: string = '';
}
