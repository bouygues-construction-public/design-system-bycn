import { NgModule } from '@angular/core';

import { MasNavigationDrawer } from './navigation-drawer.component';
import { CommonModule } from '@angular/common';
import { MasNavigationItemModule } from '../navigation-item';
import { MasNavigationDrawerSection } from './navigation-drawer-section.component';
import { MasDividerModule } from '../divider';

@NgModule({
  imports: [CommonModule, MasNavigationItemModule, MasDividerModule],
  exports: [MasNavigationDrawer, MasNavigationDrawerSection],
  declarations: [MasNavigationDrawer, MasNavigationDrawerSection],
})
export class MasNavigationDrawerModule {}
