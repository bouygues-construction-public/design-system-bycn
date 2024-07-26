import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasLink } from './link.component';
import { MasLinkDirective } from './link.directive';



@NgModule({ 
  imports: [
    CommonModule
  ],
  exports: [MasLink, MasLinkDirective],
  declarations: [MasLink, MasLinkDirective],
})
export class MasLinkModule { }
