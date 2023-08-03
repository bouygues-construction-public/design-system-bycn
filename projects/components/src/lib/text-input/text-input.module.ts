import { NgModule } from '@angular/core';

import { MasTextInput } from './text-input.component';
import { CommonModule } from '@angular/common';
import {MasErrorModule, MasLabelModule, MasHelperModule} from '../sub-elements'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MasErrorModule, MasLabelModule, MasHelperModule, ReactiveFormsModule],
  declarations: [MasTextInput],
  exports: [MasTextInput],
  providers: [],
})
export class MasTextInputModule {}
