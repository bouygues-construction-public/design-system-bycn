import { NgModule } from '@angular/core';

import { MasActionDropdown } from './action-dropdown.component';
import { CommonModule } from '@angular/common';
import { MasDropdownOption } from './dropdown-option.component';

@NgModule({
  imports: [CommonModule],
  exports: [MasActionDropdown, MasDropdownOption],
  declarations: [MasActionDropdown, MasDropdownOption],
})
export class MasActionDropdownModule {}
