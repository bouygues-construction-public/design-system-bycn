import { NgModule } from '@angular/core';

import { MasNavigationBar } from './navigation-bar.component';
import { MasIconButtonModule } from '../icon-button';
import { CommonModule } from '@angular/common';
import { MasButtonModule } from '../button';

@NgModule({
  exports: [MasNavigationBar],
  imports: [CommonModule, MasIconButtonModule, MasButtonModule],
  declarations: [MasNavigationBar],
})
export class MasNavigationBarModule {}
