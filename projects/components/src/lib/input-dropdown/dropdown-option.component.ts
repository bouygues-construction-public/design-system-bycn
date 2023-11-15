import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'mas-dropdown-option',
  template: `
    <img
      src="{{ imageUrl }}"
      alt="dropdown item image"
      class="mas-dropdown-option-image"
      *ngIf="imageUrl !== '' && !isMultiple"
    />
    <i class="{{ icon }} mas-dropdown-option-icon" *ngIf="imageUrl === '' && icon !== '' && !isMultiple"></i>
    <ng-container *ngIf="isMultiple">
      <div class="mas-dropdown-option-checkbox" [ngClass]="{ 'mas-checkbox-box--active': selected }">
        <ng-container *ngIf="selected && size === 'S'">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 5L3 7L9 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </ng-container>
      </div>
    </ng-container>
    <span class="mas-typo_body-3 mas-option_text" #text><ng-content></ng-content></span>
    <i class="mas-check-outlined mas-icon mas-system-and-device--outlined" *ngIf="selected && !isMultiple"></i>
  `,
  host: {
    '[class.mas-dropdown-option--selected]': '_selected',
    class: 'mas-dropdown-option',
    '(click)': 'onOptionClick($event)',
    role: 'option',
  },
})
export class MasDropdownOption {
  private _selected: boolean = false;
  @Input() imageUrl: string = '';
  @Input() icon: string = '';

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
