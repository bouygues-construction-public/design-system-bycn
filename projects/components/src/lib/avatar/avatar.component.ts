import { Component, Input } from '@angular/core';

@Component({
  selector: 'mas-avatar',
  template: `
  <div class="avatar avatar-{{size}} avatar-stroke-outside" >
    <ng-container *ngIf="type === 'Image'">
      <img src="{{UrlImg}}" alt="Avatar" />
    </ng-container>
    <i class="{{icon}}" *ngIf="type === 'Icon'"></i>
    <ng-container *ngIf="type === 'Initial'"><p>{{Initial.toUpperCase()}}</p></ng-container>
  </div>
  `,
  
})
export class MasAvatar {
  @Input() UrlImg: string;
  @Input() Initial: string;
  @Input() size: 'XS' | 'S' | 'M' | 'L';
  @Input() type: 'Image' | 'Icon' | 'Initial';
  @Input() icon: string | null = null;





}
