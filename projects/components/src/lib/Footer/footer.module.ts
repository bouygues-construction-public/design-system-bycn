import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasFooter} from './footer.component';
import { MasLogotype,MasIconButton,MasDivider } from "projects/components/src/public-api";


@NgModule({ 
  imports: [
    CommonModule
  ],
  
  exports: [MasFooter,MasLogotype,MasIconButton,MasDivider],
  declarations: [MasFooter,MasLogotype,MasIconButton,MasDivider],
  
})
export class MasFooterModule {}
