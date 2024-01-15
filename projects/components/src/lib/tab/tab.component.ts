import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mas-tab',
  template: `
    <div class="mas-tab_content" role="tabpanel" *ngIf="render()" [ngStyle]="{ display: selected ? null : 'none' }">
      <ng-content></ng-content>
    </div>
  `,
  host: {
    class: 'mas-tab',
    '[class.mas-tab--selected]': 'selected',
    '[class.mas-tab--disabled]': 'disabled',
  },
})
export class MasTab implements OnInit {
  static tabCount = 0;
  @Input() identifier = `tab-${MasTab.tabCount++}`;
  @Input() leadingIcon: string = '';
  @Input() disabled: boolean = false;
  @Input() selected: boolean = false;
  @Input() number: number = 0;
  @Input() header: string = '';
  @Output() select: EventEmitter<void> = new EventEmitter<void>();
  constructor() {}
  cacheActive = false;
  render(): boolean {
    return this.selected || this.cacheActive;
  }
  onSelect() {
    this.select.emit();
  }
  ngOnInit() {}
}
