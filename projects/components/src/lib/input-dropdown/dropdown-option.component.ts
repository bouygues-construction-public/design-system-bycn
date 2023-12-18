import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'mas-dropdown-option',
  template: `
    <img src="{{ imageUrl }}" class="mas-dropdown-option-image" *ngIf="type === 'image'" />
    <i class="{{ icon }} mas-icon mas-input-dropdown_icon" *ngIf="type === 'icon' && icon !== ''"></i>
    <ng-container *ngIf="isMultiple && type === 'checkbox'">
      <div class="mas-dropdown-option-checkbox" [ngClass]="{ 'mas-checkbox-box--active': selected }">
        <i class="mas-check-outlined mas-system-and-device--outlined mas-icon" style="color: white; z-index: 1" *ngIf="selected"></i>
      </div>
    </ng-container>
    <span class="mas-input-dropdown-option_text" #text [ngClass]="{ 'mas-typo_body-3': size === 'S', 'mas-typo_body-2': size === 'M' }"
      ><ng-content></ng-content
    ></span>
    <i class="mas-check-outlined mas-icon mas-system-and-device--outlined" *ngIf="selected && type !== 'checkbox'"></i>
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
export class MasDropdownOption {
  private _selected: boolean = false;
  @Input() imageUrl: string = '';
  @Input() icon: string = '';
  @Input() type: 'checkbox' | 'image' | 'icon' | 'text' = 'text';
  @Input() isMultiple: boolean = false;
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
