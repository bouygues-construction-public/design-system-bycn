import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'mas-dropdown-option',
  template: `
    <img src="{{ imageUrl }}" class="mas-dropdown-option-image" *ngIf="type === 'image'" />
    <i class="{{ icon }} mas-icon mas-dropdown-option_icon" *ngIf="type === 'icon' && icon !== ''"></i>
    <span class="mas-dropdown-option_text" #text [ngClass]="{ 'mas-typo_body-3': size === 'S', 'mas-typo_body-2': size === 'M' }"
      ><ng-content></ng-content
    ></span>
  `,
  host: {
    '[class.mas-dropdown-option--selected]': '_selected',
    '[class.mas-dropdown-option--medium]': 'size === "M"',
    '[class.mas-dropdown-option--small]': 'size === "S"',
    class: 'mas-dropdown-option',
    '(click)': 'onOptionClick($event)',
    role: 'option',
  },
})
export class MasActionDropdownOption {
  public size: 'S' | 'M' = 'S';
  @Input() imageUrl: string = '';
  @Input() icon: string = '';
  @Input() type: 'checkbox' | 'image' | 'icon' | 'text' = 'text';
  @Input() disabled: boolean;
  @Input() onChange = () => {};
  @Output() change: EventEmitter<any> = new EventEmitter();
  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @ViewChild('text', { static: true }) _text: ElementRef<HTMLElement> | undefined;
  get text(): any {
    return this._text?.nativeElement.outerText;
  }
  onOptionClick(event: Event) {
    this.onChange();
    this.change.emit({ originalEvent: event, option: this });
  }
}
