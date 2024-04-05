import { NgModule } from '@angular/core';

import { MasNavigationBar } from './navigation-bar.component';
import { MasIconButtonModule } from '../icon-button';
import { CommonModule } from '@angular/common';
import { MasButtonModule } from '../button';
import { MasSearchBarModule } from '../search-bar';
import { MasAvatarModule } from '../avatar';

@NgModule({
  exports: [MasNavigationBar],
  imports: [CommonModule, MasIconButtonModule, MasButtonModule, MasSearchBarModule, MasAvatarModule],
  declarations: [MasNavigationBar],
})
export class MasNavigationBarModule {}
