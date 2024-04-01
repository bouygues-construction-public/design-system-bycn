import { Component, Input, OnInit } from '@angular/core';

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
  },
})
export class MasNavigationDrawerSection implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() heading: string = '';
}
