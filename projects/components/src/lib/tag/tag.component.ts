import { Component, Input } from '@angular/core';
import '@masoni/css-tag/dist/index.css';

@Component({
  selector: 'mas-tag',
  template: `
      <span class="mas-tag" class="{{getColorClass()}}" 
      [ngClass]="{'mas-tag-small': size === 'small', 'mas-tag-medium': size === 'medium'}">
        <i *ngIf="leadingIcon" class="mas-icon mas-icon-left {{leadingIcon}}"></i>
        <span class="mas-tag-label">{{ label }}</span>
      </span>
  `
})
export class MasTag {
  
  @Input() label: string;
  @Input() leadingIcon: string;
  @Input() size: 'small' | 'medium' = 'medium';
  @Input() color: 'orange' | 'amber' | 'green' | 'teal' | 'blue' | 'purple' | 'red' | 'roc'  = 'orange';
  
  getColorClass():string{
    if(this.color){
      return "mas-tag-color-"+this.color;
    }
    return "";
  }
}

