import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasTooltip } from './tooltip.component';
import { MasTooltipDirective } from './tooltip.directive';



@NgModule({ 
  imports: [
    CommonModule
  ],
  exports: [MasTooltip, MasTooltipDirective ],
  declarations: [MasTooltip, MasTooltipDirective],
})
export class MasTooltipModule { }
