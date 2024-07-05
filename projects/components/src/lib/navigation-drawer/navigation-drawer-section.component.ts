import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList, forwardRef } from '@angular/core';
import { MasNavigationItem } from '../navigation-item';

@Component({
  selector: 'mas-navigation-drawer-section',
  template: `
    <div class="mas-navigation-drawer-section_container">
      <span class="section-heading mas-typo_overline">{{ heading }}</span>
      <ng-content select="mas-navigation-item"></ng-content>
    </div>
    <mas-divider></mas-divider>
  `,
  host: {
    class: 'mas-navigation-drawer-section',
    '[class.mas-navigation-drawer-section--collapsed]': 'collapsed === true',
  },
})
export class MasNavigationDrawerSection implements AfterContentInit {
  constructor() {}
  ngAfterContentInit(): void {
    this.onCollapse(this.collapsed);
  }
  @ContentChildren(forwardRef((): any => MasNavigationItem)) navigationItems?: QueryList<MasNavigationItem>;

  onCollapse(isCollapsed: boolean) {
    this.navigationItems?.map((item) => (item.collapsed = isCollapsed));
  }
  @Input() heading: string = '';
  protected _collapsed: boolean = false;
  set collapsed(isCollapsed: boolean) {
    this._collapsed = isCollapsed;
    this.onCollapse(isCollapsed);
  }
  get collapsed(): boolean {
    return this._collapsed;
  }
}
