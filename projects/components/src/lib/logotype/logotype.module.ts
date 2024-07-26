import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasLogotype } from './logotype.component';



@NgModule({ 
  imports: [
    CommonModule
  ],
  exports: [MasLogotype],
  declarations: [MasLogotype],
})
export class MasLogotypeModule { }
