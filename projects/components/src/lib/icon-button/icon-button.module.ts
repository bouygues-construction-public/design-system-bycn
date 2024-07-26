import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasIconButton } from './icon-button.component';
import { MasIconButtonDirective } from './icon-button.directive';



@NgModule({ 
  imports: [
    CommonModule
  ],
  exports: [MasIconButton, MasIconButtonDirective],
  declarations: [MasIconButton, MasIconButtonDirective],
})
export class MasIconButtonModule { }
