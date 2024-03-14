import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasAvatar } from './avatar.component';
import { MasAvatarDirective } from './avatar.directive';



@NgModule({ 
  imports: [
    CommonModule
  ],
  exports: [MasAvatar, MasAvatarDirective],
  declarations: [MasAvatar, MasAvatarDirective],
})
export class MasAvatarModule { }
