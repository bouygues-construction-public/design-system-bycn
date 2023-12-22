import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mas-tab',
  templateUrl: 'tab.component.html',
  host: {
    class: 'mas-tab',
    '[class.mas-tab--selected]': 'selected',
    '[class.mas-tab--disabled]': 'disabled',
    '[class.mas-tab--medium]': 'size === "M"',
    '[class.mas-tab--large]': 'size === "L"',
    '[class.mas-tab--horizontal]': 'orientation === "horizontal"',
    '[class.mas-tab--vertical]': 'orientation === "vertical"',
    '(click)': 'onClick($event)',
  },
})
export class MasTab implements OnInit {
  static tabCount = 0;
  @Input() identifier = `tab-${MasTab.tabCount++}`;
  @Input() leadingIcon: string = '';
  @Input() size: 'M' | 'L' = 'M';
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() disabled: boolean = false;
  @Input() selected: boolean = false;
  @Input() number: number = 0;
  constructor() {}
  onClick(event: Event) {
    this.selected = !this.selected;
  }
  ngOnInit() {}
}
