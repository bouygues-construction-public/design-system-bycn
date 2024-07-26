import { NgModule } from '@angular/core';
import { MasRadioGroup } from './radio-group.component';
import { MasRadioButton } from './radiobutton.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [MasRadioButton, MasRadioGroup],
  declarations: [MasRadioButton, MasRadioGroup],
})
export class MasRadioButtonModule {}
