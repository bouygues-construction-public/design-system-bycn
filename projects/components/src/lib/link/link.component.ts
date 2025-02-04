import { Component, Input } from '@angular/core';

@Component({
  selector: 'mas-link',
  host: {
    class: 'mas-link',
    '[class.mas-link_size--x-small]': 'size === "x-small"',
    '[class.mas-link_size--small]': 'size === "small"',
    '[class.mas-link_size--medium]': 'size === "medium"',
    '[class.mas-link_size--large]': 'size === "large"',
    '[class.mas-link--disabled]': 'disabled === true',
  },
  template: `
    <a [href]="href">
      <span class="mas-link_label">{{label}}</span>
      <i *ngIf="icon !== ''" class="mas-link_icon {{icon}}"></i>
    </a>
  `,
})
export class MasLink {
  /**
   * The size of the link. Available options: 'x-small', 'small', 'medium', 'large'. Default: 'medium'.
   */
  @Input() size: 'x-small' |  'small' | 'medium' | 'large' = 'medium';
  /**
   * The URL the link should navigate to. Default: '#'.
   */
  @Input() href: string = "#"; 
  /**
   * Label for link.
   */
  @Input() label: string = '';
  /**
   * Link's icon.
   */
  @Input() icon: string = '';
  /**
   * Whether the link is disabled
   */
  @Input() disabled: boolean = false;
}

