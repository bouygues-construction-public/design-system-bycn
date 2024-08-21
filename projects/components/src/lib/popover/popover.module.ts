import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasPopOver } from './popover.component';
import { MasPopoverDirective } from './popover.directive';



@NgModule({ 
  imports: [
    CommonModule
  ],
  exports: [MasPopOver,MasPopoverDirective ],
  declarations: [MasPopOver , MasPopoverDirective],
})
export class MasPopOverModule { }
