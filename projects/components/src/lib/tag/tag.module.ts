import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasTag } from './tag.component';



@NgModule({ 
  imports: [
    CommonModule
  ],
  exports: [MasTag],
  declarations: [MasTag],
})
export class MasTagModule { }
