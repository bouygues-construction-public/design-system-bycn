import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasErrorModule, MasHelperModule, MasLabelModule } from '../sub-elements';
import { MasSelect } from './select.component';
import { MasOption } from './option.component';
import { MasOptionGroup } from './option-group.directive';
import * as i0 from "@angular/core";
export class MasSelectModule {
}
MasSelectModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasSelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MasSelectModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: MasSelectModule, declarations: [MasSelect, MasOption, MasOptionGroup], imports: [CommonModule, FormsModule, MasErrorModule, MasHelperModule, MasLabelModule], exports: [MasSelect, MasOption, MasOptionGroup] });
MasSelectModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasSelectModule, imports: [CommonModule, FormsModule, MasErrorModule, MasHelperModule, MasLabelModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasSelectModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [MasSelect, MasOption, MasOptionGroup],
                    imports: [CommonModule, FormsModule, MasErrorModule, MasHelperModule, MasLabelModule],
                    exports: [MasSelect, MasOption, MasOptionGroup],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VsZWN0L3NlbGVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQU0xRCxNQUFNLE9BQU8sZUFBZTs7NEdBQWYsZUFBZTs2R0FBZixlQUFlLGlCQUpYLFNBQVMsRUFBRSxTQUFTLEVBQUUsY0FBYyxhQUN6QyxZQUFZLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsY0FBYyxhQUMxRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGNBQWM7NkdBRW5DLGVBQWUsWUFIaEIsWUFBWSxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGNBQWM7MkZBR3pFLGVBQWU7a0JBTDNCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxjQUFjLENBQUM7b0JBQ3BELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxjQUFjLENBQUM7b0JBQ3JGLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsY0FBYyxDQUFDO2lCQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBNYXNFcnJvck1vZHVsZSwgTWFzSGVscGVyTW9kdWxlLCBNYXNMYWJlbE1vZHVsZSB9IGZyb20gJy4uL3N1Yi1lbGVtZW50cyc7XHJcbmltcG9ydCB7IE1hc1NlbGVjdCB9IGZyb20gJy4vc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hc09wdGlvbiB9IGZyb20gJy4vb3B0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hc09wdGlvbkdyb3VwIH0gZnJvbSAnLi9vcHRpb24tZ3JvdXAuZGlyZWN0aXZlJztcclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtNYXNTZWxlY3QsIE1hc09wdGlvbiwgTWFzT3B0aW9uR3JvdXBdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBNYXNFcnJvck1vZHVsZSwgTWFzSGVscGVyTW9kdWxlLCBNYXNMYWJlbE1vZHVsZV0sXHJcbiAgZXhwb3J0czogW01hc1NlbGVjdCwgTWFzT3B0aW9uLCBNYXNPcHRpb25Hcm91cF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXNTZWxlY3RNb2R1bGUge31cclxuIl19