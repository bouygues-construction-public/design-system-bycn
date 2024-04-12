import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasModal} from './modal.component';
import { MasButton } from "projects/components/src/public-api";
import { MasIconButton } from "projects/components/src/public-api";


@NgModule({ 
  imports: [
    CommonModule
  ],
  
  exports: [MasModal,MasButton,MasIconButton],
  declarations: [MasModal,MasButton,MasIconButton],
  
})
export class MasModalModule {}
