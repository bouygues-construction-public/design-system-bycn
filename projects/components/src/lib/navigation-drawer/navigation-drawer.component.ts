import { AfterContentInit, Component, ContentChildren, Input, Output, QueryList, TemplateRef, forwardRef } from '@angular/core';
import { MasNavigationDrawerSection } from './navigation-drawer-section.component';

@Component({
  selector: 'mas-navigation-drawer',
  templateUrl: 'navigation-drawer.component.html',
  host: {
    class: 'mas-navigation-drawer',
    '[class.mas-navigation-drawer--collapsed]': 'collapsed === true',
  },
})
export class MasNavigationDrawer implements AfterContentInit {
  constructor() {}
  ngAfterContentInit(): void {
    this.onCollapse(this.collapsed);
  }
  @ContentChildren(forwardRef((): any => MasNavigationDrawerSection))
  navigationSections?: QueryList<MasNavigationDrawerSection>;

  @Input() showDivider: boolean = true;
  @Input() showLogo: boolean = true;
  @Input() headerComponent: TemplateRef<any>;
  @Input() footerComponent: TemplateRef<any>;
  onCollapse(isCollapsed: boolean) {
    this.navigationSections?.map((section) => (section.collapsed = isCollapsed));
  }
  _collapsed: boolean = false;
  @Input()
  set collapsed(isCollapsed: boolean) {
    this._collapsed = isCollapsed;
    this.onCollapse(isCollapsed);
  }
  get collapsed(): boolean {
    return this._collapsed;
  }
}
