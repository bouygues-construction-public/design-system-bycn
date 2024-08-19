import { Component, EventEmitter, Input, Optional, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'mas-breadcrumb-item',
  template: `
    <a (click)="navigate($event)" (keydown.space)="navigate($event)" [href]="this.domSanitizer.bypassSecurityTrustUrl(this._href)" style="user-select: none;">
      {{content}}
    </a>
  `,
  host: {
    class: 'mas-breadcrumb-item',
  },
})
export class MasBreadcrumbItem {
  /**
   * Text for item.
   */
  @Input() content: String;
  /**
   * External link to navigate when item is clicked.
   */
  @Input() set href(value: string) {
    this._href = value;
  }
  get href(): string {
    if (!this._href) {
      return '/#';
    }
    return this._href;
  }

  /**
   * Array of commands to send to the router when the link is activated
   * See: https://angular.io/api/router/Router#navigate
   */
  @Input() route: any[];

  /**
   * Router options. Used in conjunction with `route`
   * See: https://angular.io/api/router/Router#navigate
   */
  @Input() routeExtras: any;

  /**
   * Fired when an item is selected.
   */
  @Output() navigation = new EventEmitter<Promise<boolean>>();

  protected _href: string;
  constructor(protected domSanitizer: DomSanitizer, @Optional() protected router: Router) {}
  navigate(event: { preventDefault: () => void }) {
    if (this.router && this.route) {
      event.preventDefault();
      const status = this.router.navigate(this.route, this.routeExtras);
      this.navigation.emit(status);
    }
  }
}
