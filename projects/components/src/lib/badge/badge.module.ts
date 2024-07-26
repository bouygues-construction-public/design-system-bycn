import { NgModule } from '@angular/core';

import { MasBadge } from './badge.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [MasBadge],
    declarations: [MasBadge],
})
export class MasBadgeModule { }
