import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mas-navigation-drawer',
  templateUrl: 'navigation-drawer.component.html',
  host: {
    class: 'mas-navigation-drawer',
    '[class.mas-navigation-drawer--collapsed]': 'collapsed === true',
  },
})
export class MasNavigationDrawer implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input() showDivider: boolean = true;
  @Input() showLogo: boolean = true;
  @Input() collapsed: boolean = false;
}
