import { Component, Input } from '@angular/core';

@Component({
  selector: 'mas-link',
  template: `
    <a [ngClass]="classes" [href]="href">
      <ng-content></ng-content>
    </a>
  `,
})
export class MasLink {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() standalone: boolean = false;
  @Input() iconAlong: boolean = false;
  @Input() href: string = "#"; 

  get classes(): { [key: string]: boolean } {
    return {
      'mas-link': true,
      [`mas-link_size--${this.size}`]: true,
      'mas-link--standalone': this.standalone,
      'mas-link--icon-along': this.iconAlong,
    };
  }
 
}

