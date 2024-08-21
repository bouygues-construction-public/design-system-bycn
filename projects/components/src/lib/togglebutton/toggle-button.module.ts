import { NgModule } from '@angular/core';
import { MasToggleButton } from './toggle-button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [MasToggleButton],
    declarations: [MasToggleButton],
})
export class MasToggleButtonModule { }
