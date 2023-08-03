import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';  
import { MasChip } from './chip.component'; 

@NgModule({
    imports: [CommonModule],
    declarations: [MasChip],
    exports: [MasChip]
})
export class MasChipModule {}