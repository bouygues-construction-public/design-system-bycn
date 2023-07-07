import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mas-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class MasChip {
  @Input() label: string='';
  @Input() removable: boolean=false;
  @Input() icon: string;
  @Input() imageUrl: string;
  @Output() onRemove: EventEmitter<any> = new EventEmitter<any>();

  removeChip() {
    this.onRemove.emit();
  }
}