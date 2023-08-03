import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasCheckbox } from './checkbox.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MasCheckbox],
  exports: [MasCheckbox],
})
export class MasCheckboxModule {}
