import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasTab } from './tab.component';
import { MasBadgeModule } from '@masoni/components/dist';

@NgModule({
    imports: [CommonModule, MasBadgeModule],
    exports: [MasTab],
    declarations: [MasTab],
})
export class MasTabModule { }
