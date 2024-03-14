import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasAvatar } from './avatar.component';



@NgModule({ 
  imports: [
    CommonModule
  ],
  exports: [MasAvatar],
  declarations: [MasAvatar],
})
export class MasAvatarModule { }
