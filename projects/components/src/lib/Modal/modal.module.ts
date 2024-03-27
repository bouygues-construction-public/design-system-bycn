import { EventEmitter, Input, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasModal} from './modal.component';
import { MasButton } from "projects/components/src/public-api";

@NgModule({ 
  imports: [
    CommonModule
  ],
  exports: [MasModal,MasButton],
  declarations: [MasModal,MasButton],
})
export class MasModalModule {

 
 }
