import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'mas-option',
  template: `
    <i class="mas-check-outlined mas-icon mas-system-and-device--outlined mas-option_icon" *ngIf="selected"></i>
    <span class="mas-typo_body-3 mas-option_text" #text><ng-content></ng-content></span> 
  `,
  host: {
    '[class.mas-option--selected]': '_selected',
    class: 'mas-option',
    '(click)': 'onOptionClick($event)',
    role: 'option',
  },
})
export class MasOption {
  private _selected: boolean = false;
  @Input() value: any = '';
  @Input() disabled: boolean;
  @Input() size: 'S' | 'M' = 'S'; // todo: follow parent
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @ViewChild('text', { static: true }) _text: ElementRef<HTMLElement> | undefined;
  get text(): any {
    return this._text?.nativeElement.outerText;
  }
  get selected(): boolean {
    return this._selected;
  }
  onOptionClick(event: Event) {
    this.onChange.emit({ originalEvent: event, option: this });
  }
  select(): void {
    if (!this._selected) {
      this._selected = true;
    }
  }
  deselect(): void {
    if (this._selected) {
      this._selected = false;
    }
  }
}
