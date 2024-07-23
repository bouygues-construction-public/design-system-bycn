import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasToast } from './toast.component';



@NgModule({ 
  imports: [
    CommonModule
  ],
  exports: [MasToast],
  declarations: [MasToast],
})
export class MasToastModule { }
