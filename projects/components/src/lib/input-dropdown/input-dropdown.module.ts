import { NgModule } from '@angular/core';

import { MasInputDropdown } from './input-dropdown.component';
import { CommonModule } from '@angular/common';
import { MasDropdownOption } from './dropdown-option.component';

@NgModule({
  imports: [CommonModule],
  exports: [MasInputDropdown, MasDropdownOption],
  declarations: [MasInputDropdown, MasDropdownOption],
})
export class MasInputDropdownModule {}
