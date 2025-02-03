import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasLinearProgressBar } from './linear-progress-bar.component';



@NgModule({ 
  imports: [
    CommonModule
  ],
  exports: [MasLinearProgressBar],
  declarations: [MasLinearProgressBar],
})
export class MasLinearProgressBarModule { }
