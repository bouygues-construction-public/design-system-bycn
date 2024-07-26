import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasAlert } from './alert.component';
import { AlertService } from './alert.service';



@NgModule({ 
  imports: [
    CommonModule
  ],
  exports: [MasAlert],
  declarations: [MasAlert],
  
})
export class MasAlertModule { }
