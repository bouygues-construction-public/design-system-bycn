import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasFooter } from './footer.component';
import { MasLogotypeModule, MasIconButtonModule, MasDividerModule } from 'projects/components/src/public-api';

@NgModule({
  imports: [CommonModule, MasLogotypeModule, MasIconButtonModule, MasDividerModule],
  exports: [MasFooter],
  declarations: [MasFooter],
})
export class MasFooterModule {}
