import { NgModule } from '@angular/core';

import { MasNavigationBar } from './navigation-bar.component';
import { MasIconButtonModule } from '../icon-button';
import { CommonModule } from '@angular/common';
import { MasButtonModule } from '../button';
import { MasSearchBarModule } from '../search-bar';

@NgModule({
  exports: [MasNavigationBar],
  imports: [CommonModule, MasIconButtonModule, MasButtonModule, MasSearchBarModule],
  declarations: [MasNavigationBar],
})
export class MasNavigationBarModule {}
