import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'mas-action-dropdown-option',
  template: `
    <img src="{{ imageUrl }}" class="mas-dropdown-option-image" *ngIf="type === 'image'" />
    <i class="{{ icon }} mas-icon mas-dropdown-option_icon" *ngIf="type === 'icon' && icon !== ''"></i>
    <span class="mas-dropdown-option_text" #text [ngClass]="{ 'mas-typo_body-3': size === 'S', 'mas-typo_body-2': size === 'M' }"
      ><ng-content></ng-content
    ></span>
  `,
  host: {
    '[class.mas-dropdown-option--medium]': 'size === "M"',
    '[class.mas-dropdown-option--small]': 'size === "S"',
    '[class.mas-dropdown-option--focus]': 'isFocus',
    class: 'mas-dropdown-option',
    '(click)': 'onOptionClick($event)',
    role: 'option',
  },
})
export class MasActionDropdownOption {
  /**
   * Image for MasActionDropdownOption - type: image.
   */
  @Input() imageUrl: string = '';
  /**
   * Icon for MasActionDropdownOption - type: icon.
   */
  @Input() icon: string = '';
  /**
   * MasActionDropdown's type include: 'checkbox' | 'image' | 'icon' | 'text'.
   */
  @Input() type: 'checkbox' | 'image' | 'icon' | 'text' = 'text';
  /**
   * Whether the component is disabled.
   */
  @Input() disabled: boolean;
  /**
   * Callback to invoke when value of MasActionDropdownOption clicked.
   */
  @Output() onClick: EventEmitter<MasActionDropdownOptionClickEvent> = new EventEmitter();
  @ViewChild('text', { static: true }) _text: ElementRef<HTMLElement> | undefined;
  public size: 'S' | 'M' = 'S';
  _isFocus: boolean = false;
  get isFocus() {
    return this._isFocus;
  }
  set isFocus(value: boolean) {
    this._isFocus = value;
  }
  constructor(public elRef: ElementRef) {}
  get text(): any {
    return this._text?.nativeElement.outerText;
  }
  onOptionClick(event: Event) {
    this.onClick.emit({ originalEvent: event, option: this });
  }
}

export class MasActionDropdownOptionClickEvent {
  originalEvent: Event;
  option?: MasActionDropdownOption
}
