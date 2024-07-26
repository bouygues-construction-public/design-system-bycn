import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasFooter } from './footer.component';
import { MasLogotypeModule} from '../logotype';
import { MasIconButtonModule} from '../icon-button';
import { MasDividerModule } from '../divider';

@NgModule({
  imports: [CommonModule, MasLogotypeModule, MasIconButtonModule, MasDividerModule],
  exports: [MasFooter],
  declarations: [MasFooter],
})
export class MasFooterModule {}
