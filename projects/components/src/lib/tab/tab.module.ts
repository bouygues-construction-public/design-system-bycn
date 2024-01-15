import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasTab } from './tab.component';
import { MasTabHeader } from './tab-header.component';
import { MasTabView } from './tab-view.component';
import { MasBadgeModule } from '../badge';

@NgModule({
  imports: [CommonModule, MasBadgeModule],
  exports: [MasTab, MasTabView],
  declarations: [MasTab, MasTabHeader, MasTabView],
})
export class MasTabModule {}
