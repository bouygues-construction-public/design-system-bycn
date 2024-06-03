import { NgModule } from '@angular/core';

import { MasDataTable } from './data-table.component';
import { MasAvatarModule } from '../avatar';
import { MasIconButtonModule } from '../icon-button';
import { CommonModule } from '@angular/common';
import { MasCheckboxModule } from '../checkbox';
import { MasRadioButtonModule } from '../radiobutton';
import { MasTagModule } from '../tag';

@NgModule({
  imports: [CommonModule, MasAvatarModule, MasIconButtonModule, MasCheckboxModule, MasRadioButtonModule, MasTagModule],
  exports: [MasDataTable],
  declarations: [MasDataTable],
})
export class MasDataTableModule {}

