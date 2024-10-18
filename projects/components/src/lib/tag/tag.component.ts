import { Component, Input } from '@angular/core';

@Component({
  selector: 'mas-tag',
  template: `
      <span class="mas-tag" class="{{getColorClass()}}" 
      [ngClass]="{'mas-tag_size--small': size === 'small', 'mas-tag_size--medium': size === 'medium'}">
        <i *ngIf="leadingIcon" class="mas-icon mas-icon-left {{leadingIcon}}"></i>
        <span class="mas-tag_label">{{ label }}</span>
      </span>
  `
})
export class MasTag {
  
  @Input() label: string;
  @Input() leadingIcon: string;
  @Input() size: 'small' | 'medium' = 'medium';
  @Input() color: 'default' | 'orange' | 'amber' | 'green' | 'teal' | 'blue' | 'purple' | 'red' | 'roc'  = 'default';
  
  getColorClass():string{
    if(this.color){
      return "mas-tag_color--"+this.color;
    }
    return "";
  }
}

