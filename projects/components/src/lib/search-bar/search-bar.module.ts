import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MasSearchBar } from './search-bar.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [MasSearchBar],
    declarations: [MasSearchBar],
})
export class MasSearchBarModule { }
