import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Optional,
  Output,
  QueryList,
} from '@angular/core';
import { MasBreadcrumbItem } from './breadcrumb-item.component';
import { Router } from '@angular/router';
const MINIMUM_OVERFLOW_THRESHOLD = 4;

@Component({
  selector: 'mas-breadcrumbs',
  template: `<nav class="mas-breadcrumbs_nav">
    <ng-template [ngIf]="!shouldShowOverflow || !hideOverflow">
      <ng-content></ng-content>
    </ng-template>
    <ng-template [ngIf]="shouldShowOverflow && hideOverflow">
      <mas-breadcrumb-item
        *ngIf="first !== null"
        [href]="first.href"
        [route]="first.route"
        [routeExtras]="first.routeExtras"
        (navigation)="navigation.emit($event)"
        [content]="first.content"
      />
      <div class="mas-breadcrumb_overflow" (click)="toggleOverflow()">
        <i class="mas-dots-three-outlined mas-system-and-device--outlined" style="line-height: 20px; height: 20px;"></i>
      </div>
      <mas-breadcrumb-item
        *ngIf="last !== null"
        [href]="last.href"
        [route]="last.route"
        [routeExtras]="last.routeExtras"
        (navigation)="navigation.emit($event)"
        [content]="last.content"
      />
    </ng-template>
  </nav>`,
  host: {
    class: 'mas-breadcrumbs',
  },
})
export class MasBreadcrumb implements AfterContentInit {
  @ContentChildren(MasBreadcrumbItem) children: QueryList<MasBreadcrumbItem>;
  @Input()
  set threshold(threshold: number) {
    this._threshold = threshold;
    if (isNaN(threshold) || threshold < MINIMUM_OVERFLOW_THRESHOLD) {
      this._threshold = MINIMUM_OVERFLOW_THRESHOLD;
    }
  }

  get threshold(): number {
    return this._threshold;
  }
  @Input() items: Array<MasBreadcrumbItem>;

  /**
   * Emits the navigation status promise when the link is activated
   */
  @Output() navigation = new EventEmitter<Promise<boolean>>();
  protected _threshold: number = MINIMUM_OVERFLOW_THRESHOLD;
  get shouldShowOverflow(): boolean {
    if (!this.items) {
      return false;
    }
    return this.items.length > this.threshold;
  }
  get first(): MasBreadcrumbItem | null {
    return this.shouldShowOverflow ? this.items[0] : null;
  }
  get last(): MasBreadcrumbItem | null {
    return this.shouldShowOverflow ? this.items[this.items.length - 1] : null;
  }
  navigate(event: { preventDefault: () => void }, item: MasBreadcrumbItem) {
    if (this.router && item.route) {
      event.preventDefault();
      const status = this.router.navigate(item.route, item.routeExtras);
      this.navigation.emit(status);
    }
  }
  constructor(@Optional() protected router: Router, protected eRef: ElementRef) {}
  ngAfterContentInit(): void {
    if (this.children) {
      this.items = this.children.toArray();
    }
  }
  protected hideOverflow: boolean = true;
  toggleOverflow() {
    this.hideOverflow = !this.hideOverflow;
  }
}
