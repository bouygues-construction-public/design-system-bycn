import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasErrorModule } from './sub-elements/error.component';
import { MasHelperModule } from './sub-elements/helper.component';
import { MasSelect } from './select.component';
import { MasOption } from './option.component';
@NgModule({
  declarations: [MasSelect, MasOption],
  imports: [CommonModule, FormsModule, MasErrorModule, MasHelperModule],
  exports: [MasSelect, MasOption, Option],
})
export class MasSelectModule {}
