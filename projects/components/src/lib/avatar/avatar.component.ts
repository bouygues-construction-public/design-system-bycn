import { Component, Input } from '@angular/core';

@Component({
  selector: 'mas-avatar',
  host: {
    class: 'mas-avatar',
  },
  template: `
    <div class="mas-avatar_container mas-avatar_size--{{ size }} mas-avatar_stroke">
      <ng-container *ngIf="type === 'Image'">
        <img class="mas-avatar_img" src="{{ UrlImg }}" alt="Avatar" />
      </ng-container>
      <i class="mas-avatar_icon" class="{{ icon }}" *ngIf="type === 'Icon'"></i>
      <ng-container *ngIf="type === 'Initial'"
        ><p class="mas-avatar_initial">{{ Initial.toUpperCase() }}</p></ng-container
      >
    </div>
  `,
})
export class MasAvatar {
  /**
   * The image of the Avatar.
   */
  @Input() urlImg: string;
  /**
   * The lettre intial of the Avatar.
   */
  @Input() initial: string;
  /**
   * The size of the avatar.
   */
  @Input() size: 'x-small' | 'small' | 'medium' | 'large';
  /**
   * The variant of the mas-avatar.
   */
  @Input() type: 'image' | 'icon' | 'initial';
  /**
   * The name of the icon.
   */
  @Input() icon: string | null = null;
}
