import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasPagination } from './pagination.component';
import { MasButtonModule, MasActionDropdownModule, MasTextInputModule } from 'projects/components/src/public-api';

@NgModule({
  imports: [CommonModule, MasActionDropdownModule, MasTextInputModule, MasButtonModule],
  exports: [MasPagination],
  declarations: [MasPagination],
})
export class MasPaginationModule {}
