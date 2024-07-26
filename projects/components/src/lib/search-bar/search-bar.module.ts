import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MasSearchBar } from './search-bar.component';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [MasSearchBar],
    declarations: [MasSearchBar],
})
export class MasSearchBarModule { }
