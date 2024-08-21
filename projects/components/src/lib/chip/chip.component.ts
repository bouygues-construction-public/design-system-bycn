import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mas-chip',
  templateUrl: './chip.component.html'
})
export class MasChip {

  
  @Input() label: string;
  @Input() disabled: boolean; 
  @Input() removable: boolean; 
  @Input() selectable: boolean; 
  @Input() isSelected: boolean;
  @Input() leadingIcon: string;
  @Input() actionIcon: string;
  @Input() imageUrl: string;
  @Output() onRemove: EventEmitter<any> = new EventEmitter<any>(); 
  @Output() onAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();  

  removeChip() {
    this.onRemove.emit();
  }

  actionChip() {
    this.onAction.emit();
  }
  toggleSelection(): void {
    this.isSelected = !this.isSelected;
    this.onSelect.emit();
  }
}