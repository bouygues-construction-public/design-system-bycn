import { Component, NgModule, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import '@masoni/css-sub-elements/dist/index.css';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class MasHelper {
    isTemplate(value) {
        return value instanceof TemplateRef; // ? what's this ?
    }
}
MasHelper.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasHelper, deps: [], target: i0.ɵɵFactoryTarget.Component });
MasHelper.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: MasHelper, selector: "mas-helper", inputs: { helperText: "helperText" }, host: { classAttribute: "mas-helper" }, ngImport: i0, template: `
    <ng-content *ngIf="!isTemplate(helperText)"></ng-content>
    <ng-template *ngIf="isTemplate(helperText)" [ngTemplateOutlet]="helperText"></ng-template>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasHelper, decorators: [{
            type: Component,
            args: [{
                    selector: 'mas-helper',
                    host: {
                        class: 'mas-helper',
                    },
                    template: `
    <ng-content *ngIf="!isTemplate(helperText)"></ng-content>
    <ng-template *ngIf="isTemplate(helperText)" [ngTemplateOutlet]="helperText"></ng-template>
  `,
                }]
        }], propDecorators: { helperText: [{
                type: Input
            }] } });
export class MasHelperModule {
}
MasHelperModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasHelperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MasHelperModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: MasHelperModule, declarations: [MasHelper], imports: [CommonModule, FormsModule], exports: [MasHelper] });
MasHelperModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasHelperModule, imports: [CommonModule, FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasHelperModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [MasHelper],
                    imports: [CommonModule, FormsModule],
                    exports: [MasHelper],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc3ViLWVsZW1lbnRzL2hlbHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFVLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8seUNBQXlDLENBQUM7OztBQVdqRCxNQUFNLE9BQU8sU0FBUztJQUViLFVBQVUsQ0FBQyxLQUFVO1FBQzFCLE9BQU8sS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDLGtCQUFrQjtJQUN6RCxDQUFDOztzR0FKVSxTQUFTOzBGQUFULFNBQVMsZ0lBTFY7OztHQUdUOzJGQUVVLFNBQVM7a0JBVnJCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsWUFBWTtxQkFDcEI7b0JBQ0QsUUFBUSxFQUFFOzs7R0FHVDtpQkFDRjs4QkFFVSxVQUFVO3NCQUFsQixLQUFLOztBQVVSLE1BQU0sT0FBTyxlQUFlOzs0R0FBZixlQUFlOzZHQUFmLGVBQWUsaUJBWGYsU0FBUyxhQVFWLFlBQVksRUFBRSxXQUFXLGFBUnhCLFNBQVM7NkdBV1QsZUFBZSxZQUhoQixZQUFZLEVBQUUsV0FBVzsyRkFHeEIsZUFBZTtrQkFMM0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ3pCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUM7b0JBQ3BDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQztpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nTW9kdWxlLCBJbnB1dCwgT25Jbml0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCAnQG1hc29uaS9jc3Mtc3ViLWVsZW1lbnRzL2Rpc3QvaW5kZXguY3NzJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtYXMtaGVscGVyJyxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ21hcy1oZWxwZXInLFxyXG4gIH0sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIWlzVGVtcGxhdGUoaGVscGVyVGV4dClcIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8bmctdGVtcGxhdGUgKm5nSWY9XCJpc1RlbXBsYXRlKGhlbHBlclRleHQpXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiaGVscGVyVGV4dFwiPjwvbmctdGVtcGxhdGU+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hc0hlbHBlciB7XHJcbiAgQElucHV0KCkgaGVscGVyVGV4dDogYW55IHwgVGVtcGxhdGVSZWY8YW55PjsgLy8gISBjYW4gYmUgVGVtcGxhdGVSZWZcclxuICBwdWJsaWMgaXNUZW1wbGF0ZSh2YWx1ZTogYW55KSB7XHJcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjsgLy8gPyB3aGF0J3MgdGhpcyA/XHJcbiAgfVxyXG59XHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbTWFzSGVscGVyXSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZV0sXHJcbiAgZXhwb3J0czogW01hc0hlbHBlcl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXNIZWxwZXJNb2R1bGUge31cclxuIl19