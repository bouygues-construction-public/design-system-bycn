import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasModal} from './modal.component';
import { MasButtonModule } from "projects/components/src/public-api";
import { MasIconButtonModule } from "projects/components/src/public-api";


@NgModule({ 
  imports: [
    CommonModule,
    MasButtonModule,
    MasIconButtonModule
  ],
  
  exports: [MasModal],
  declarations: [MasModal],
  
})
export class MasModalModule {}
