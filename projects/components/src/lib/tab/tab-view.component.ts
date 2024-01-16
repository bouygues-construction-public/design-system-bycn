import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { MasTab } from './tab.component';
import { MasTabHeader } from './tab-header.component';

@Component({
  selector: 'mas-tab-view',
  template: `
    <div class="mas-tab-headers" *ngIf="skeleton">
      <!-- <mas-tab-skeleton></mas-tab-skeleton> -->
    </div>
    <div class="mas-tab-headers" *ngIf="!skeleton">
      <ng-container *ngFor="let tab of tabs">
        <mas-tab-header
          #tabHeader
          (click)="selectTab(tab)"
          [selected]="tab.selected"
          [header]="tab.header"
          [number]="tab.number"
          [leadingIcon]="tab.leadingIcon"
          [orientation]="orientation"
          [size]="size"
        >
        </mas-tab-header>
      </ng-container>
    </div>
    <div class="mas-tab-contents">
      <ng-content></ng-content>
    </div>
  `,
  host: {
    class: 'mas-tab-view',
    '[class.mas-tab-view--horizontal]': 'orientation === "horizontal"',
    '[class.mas-tab-view--vertical]': 'orientation === "vertical"',
  },
})
export class MasTabView implements OnInit, AfterContentInit {
  public currentSelectedTab: MasTab | null = null;
  @ContentChildren(MasTab, { descendants: false }) tabs: QueryList<MasTab>;
  @Input() skeleton: boolean = true;
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() size: 'M' | 'L' = 'M';
  constructor() {}
  ngAfterContentInit(): void {
    this.tabs.changes.subscribe(() => {
      this.setFirstTab();
    });
    this.setFirstTab();
  }
  protected setFirstTab() {
    setTimeout(() => {
      let firstTab = this.tabs.find((tab) => tab.selected);
      if (!firstTab && this.tabs.first) {
        firstTab = this.tabs.first;
        firstTab.selected = true;
      }
      if (firstTab) {
        firstTab.onSelect();
      }
    });
  }
  selectTab(tab: MasTab) {
    if (tab.disabled) {
      return;
    }
    this.currentSelectedTab = tab;
    this.tabs.forEach((tab) => (tab.selected = false));
    tab.selected = true;
    tab.onSelect();
  }
  ngOnInit() {}
}
