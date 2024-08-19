import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasPagination } from './pagination.component';
import { MasButtonModule} from '../button';
import { MasActionDropdownModule } from '../action-dropdown';
import {MasTextInputModule} from '../text-input';

@NgModule({
  imports: [CommonModule, MasActionDropdownModule, MasTextInputModule, MasButtonModule],
  exports: [MasPagination],
  declarations: [MasPagination],
})
export class MasPaginationModule {}
