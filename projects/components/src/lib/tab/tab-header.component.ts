import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mas-tab-header',
  template: `
    <div class="mas-tab_header">
      <ng-container *ngIf="leadingIcon !== ''">
        <i class="{{ leadingIcon }} mas-tab_icon"></i>
      </ng-container>
      <span class="mas-tab_text">
        {{ header }}
      </span>
      <ng-container *ngIf="number !== 0">
        <mas-badge [number]="number" [size]="size" type="number"></mas-badge>
      </ng-container>
    </div>
  `,
  host: {
    '[class.mas-tab--selected]': 'selected',
    '[class.mas-tab--disabled]': 'disabled',
    '[class.mas-tab--medium]': 'size === "M"',
    '[class.mas-tab--large]': 'size === "L"',
    '[class.mas-tab--horizontal]': 'orientation === "horizontal"',
    '[class.mas-tab--vertical]': 'orientation === "vertical"',
    '(click)': 'onClick($event)',
  },
})
export class MasTabHeader implements OnInit {
  static tabCount = 0;
  @Input() identifier = `tab-${MasTabHeader.tabCount++}`;
  @Input() leadingIcon: string = '';
  @Input() header: string = '';
  @Input() number: number = 0;
  @Input() size: 'M' | 'L' = 'M';
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() disabled: boolean = false;
  @Input() selected: boolean = false;
  constructor() {}
  onClick(event: Event) {
    this.selected = !this.selected;
  }
  ngOnInit() {}
}
