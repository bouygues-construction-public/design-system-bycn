import { NgModule } from '@angular/core';

import { MasDropdown } from './dropdown.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [MasDropdown],
  declarations: [MasDropdown],
})
export class MasDropdownModule {}
