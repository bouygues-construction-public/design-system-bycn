import { NgModule } from '@angular/core';

import { MasTextArea } from './text-area.component';
import { CommonModule } from '@angular/common';
import {MasErrorModule, MasLabelModule, MasHelperModule} from '../sub-elements'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MasErrorModule, MasLabelModule, MasHelperModule, ReactiveFormsModule],
  declarations: [MasTextArea],
  exports: [MasTextArea],
  providers: [],
})
export class MasTextAreaModule {}
