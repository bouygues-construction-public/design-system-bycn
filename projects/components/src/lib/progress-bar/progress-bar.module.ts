import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasProgressBar } from './progress-bar.component';



@NgModule({ 
  imports: [
    CommonModule
  ],
  exports: [MasProgressBar],
  declarations: [MasProgressBar],
})
export class MasProgressBarModule { }
