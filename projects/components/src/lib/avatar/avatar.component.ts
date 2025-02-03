import { Component, Input } from '@angular/core';

@Component({
  selector: 'mas-avatar',
  host: {
    class: 'mas-avatar',
  },
  template: `
    <div class="mas-avatar_container mas-avatar_size--{{ size }}">
      <ng-container *ngIf="type === 'image'">
        <img class="mas-avatar_img" src="{{ urlImg }}" alt="Avatar" />
      </ng-container>
      <i class="mas-avatar_icon" class="{{ icon }}" *ngIf="type === 'icon'"></i>
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
  @Input() type: 'image' | 'icon';
  /**
   * The name of the icon.
   */
  @Input() icon: string | null = null;
}
