import { NgModule } from '@angular/core';

import { MasTextInput } from './text-input.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [MasTextInput],
  exports: [MasTextInput],
  providers: [],
})
export class MasTextInputModule {}
