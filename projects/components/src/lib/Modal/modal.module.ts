import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasModal} from './modal.component';
import { MasButtonModule } from "../button";
import { MasIconButtonModule } from "../icon-button";


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
