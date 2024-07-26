import { NgModule } from '@angular/core';

import { MasActionDropdown } from './action-dropdown.component';
import { CommonModule } from '@angular/common';
import { MasActionDropdownOption } from './action-dropdown-option.component';

@NgModule({
  imports: [CommonModule],
  exports: [MasActionDropdown, MasActionDropdownOption],
  declarations: [MasActionDropdown, MasActionDropdownOption],
})
export class MasActionDropdownModule {}
