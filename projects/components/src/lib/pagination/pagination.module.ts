import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasPagination } from './pagination.component';
import { MasButton,MasActionDropdown,MasDropdownOption,MasButtonDirective ,MasTextInput} from "projects/components/src/public-api";


@NgModule({ 
  imports: [
    CommonModule
  ],
  exports: [MasPagination,MasButton,MasActionDropdown,MasDropdownOption,MasButtonDirective,MasTextInput],
  declarations: [MasPagination,MasButton,MasActionDropdown,MasDropdownOption,MasButtonDirective,MasTextInput],
})
export class MasPaginationModule { }
