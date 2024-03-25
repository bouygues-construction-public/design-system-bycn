import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasNavigationItem } from './navigation-item.component';

@NgModule({ 
  imports: [
    CommonModule
  ],
  exports: [MasNavigationItem],
  declarations: [MasNavigationItem],
})
export class MasNavigationItemModule { }
