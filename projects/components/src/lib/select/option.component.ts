import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import '@masoni/icons/dist/css/mas-icons.css';

export interface Option<T = any> {
  label?: string;
  value: T;
  icon?: string;
  title?: string;
}
@Component({
  selector: 'mas-option',
  template: `<i class="mas-check-outlined mas-icon" *ngIf="selected"></i>
    <span class="mas-typo_body-3 mas-option_text" #text><ng-content></ng-content></span> `,
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
  @Input() size: 'S' | 'L' = 'S'; // todo: follow parent
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @ViewChild('text', { static: true }) _text: ElementRef<HTMLElement> | undefined;
  get text(): any {
    return this._text?.nativeElement.outerText;
  }
  get selected(): boolean {
    console.log(this._text);
    return this._selected;
  }
  onOptionClick(event: Event) {
    this.onChange.emit({ originalEvent: event, option: this });
  }
  select(emitEvent = true): void {
    if (!this._selected) {
      this._selected = true;

      if (emitEvent) {
        // ? do we need to emit this event ?
        // this.onChange.emit(this);
      }
    }
  }
  deselect(emitEvent = true): void {
    if (this._selected) {
      this._selected = false;

      if (emitEvent) {
        // ? and this ?
        // this.onChange.emit(this);
      }
    }
  }
}
