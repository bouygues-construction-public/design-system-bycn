import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasButton } from './button.component';
import { MasButtonDirective } from './button.directive';



@NgModule({ 
  imports: [
    CommonModule
  ],
  exports: [MasButton, MasButtonDirective],
  declarations: [MasButton, MasButtonDirective],
})
export class MasButtonModule { }
