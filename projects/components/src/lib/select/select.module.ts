import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasErrorModule, MasHelperModule, MasLabelModule } from '../sub-elements';
import { MasSelect } from './select.component';
import { MasOption } from './option.component';
@NgModule({
  declarations: [MasSelect, MasOption],
  imports: [CommonModule, FormsModule, MasErrorModule, MasHelperModule, MasLabelModule],
  exports: [MasSelect, MasOption],
})
export class MasSelectModule {}
