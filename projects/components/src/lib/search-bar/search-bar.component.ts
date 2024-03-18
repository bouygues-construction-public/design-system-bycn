import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mas-search-bar',
  templateUrl: 'search-bar.component.html',
})
export class MasSearchBar implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input() placeholder: string = '';
  @Input() query: string = '';
  @Input() disabled: boolean;
  @Output() clearClick: EventEmitter<Event> = new EventEmitter();
  @Output() closeClick: EventEmitter<Event> = new EventEmitter();
  @Output() search: EventEmitter<Event> = new EventEmitter();

  onClearClick(event: any) {
    this.clearClick.emit(event);
  }
  onCloseClick(event: any) {
    this.closeClick.emit(event);
  }
  onSearch(event: Event) {
    const query = event;
    if (!query) {
      this.search.emit(event);
    }
  }
}
