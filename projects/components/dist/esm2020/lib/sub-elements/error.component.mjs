import { Component, NgModule, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import '@masoni/css-sub-elements/dist/index.css';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class MasError {
    isTemplate(value) {
        return value instanceof TemplateRef;
    }
}
MasError.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasError, deps: [], target: i0.ɵɵFactoryTarget.Component });
MasError.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: MasError, selector: "mas-error", inputs: { errorMessage: "errorMessage" }, host: { attributes: { "role": "alert" }, classAttribute: "mas-error" }, ngImport: i0, template: `
    <i class="mas-icon mas-warningcircle-filled"></i>
    <ng-content *ngIf="!isTemplate(errorMessage)"></ng-content>
    <ng-template *ngIf="isTemplate(errorMessage)" [ngTemplateOutlet]="errorMessage"></ng-template>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasError, decorators: [{
            type: Component,
            args: [{
                    selector: 'mas-error',
                    host: {
                        class: 'mas-error',
                        role: 'alert',
                    },
                    template: `
    <i class="mas-icon mas-warningcircle-filled"></i>
    <ng-content *ngIf="!isTemplate(errorMessage)"></ng-content>
    <ng-template *ngIf="isTemplate(errorMessage)" [ngTemplateOutlet]="errorMessage"></ng-template>
  `,
                }]
        }], propDecorators: { errorMessage: [{
                type: Input
            }] } });
export class MasErrorModule {
}
MasErrorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasErrorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MasErrorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: MasErrorModule, declarations: [MasError], imports: [CommonModule, FormsModule], exports: [MasError] });
MasErrorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasErrorModule, imports: [CommonModule, FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasErrorModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [MasError],
                    imports: [CommonModule, FormsModule],
                    exports: [MasError],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9zdWItZWxlbWVudHMvZXJyb3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBVSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLHlDQUF5QyxDQUFDOzs7QUFhakQsTUFBTSxPQUFPLFFBQVE7SUFFWixVQUFVLENBQUMsS0FBVTtRQUMxQixPQUFPLEtBQUssWUFBWSxXQUFXLENBQUM7SUFDdEMsQ0FBQzs7cUdBSlUsUUFBUTt5RkFBUixRQUFRLG1LQU5UOzs7O0dBSVQ7MkZBRVUsUUFBUTtrQkFacEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxXQUFXO3dCQUNsQixJQUFJLEVBQUUsT0FBTztxQkFDZDtvQkFDRCxRQUFRLEVBQUU7Ozs7R0FJVDtpQkFDRjs4QkFFVSxZQUFZO3NCQUFwQixLQUFLOztBQVVSLE1BQU0sT0FBTyxjQUFjOzsyR0FBZCxjQUFjOzRHQUFkLGNBQWMsaUJBWGQsUUFBUSxhQVFULFlBQVksRUFBRSxXQUFXLGFBUnhCLFFBQVE7NEdBV1IsY0FBYyxZQUhmLFlBQVksRUFBRSxXQUFXOzJGQUd4QixjQUFjO2tCQUwxQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQztvQkFDeEIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQztvQkFDcEMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO2lCQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgTmdNb2R1bGUsIElucHV0LCBPbkluaXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0ICdAbWFzb25pL2Nzcy1zdWItZWxlbWVudHMvZGlzdC9pbmRleC5jc3MnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21hcy1lcnJvcicsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdtYXMtZXJyb3InLFxyXG4gICAgcm9sZTogJ2FsZXJ0JyxcclxuICB9LFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8aSBjbGFzcz1cIm1hcy1pY29uIG1hcy13YXJuaW5nY2lyY2xlLWZpbGxlZFwiPjwvaT5cclxuICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIWlzVGVtcGxhdGUoZXJyb3JNZXNzYWdlKVwiPjwvbmctY29udGVudD5cclxuICAgIDxuZy10ZW1wbGF0ZSAqbmdJZj1cImlzVGVtcGxhdGUoZXJyb3JNZXNzYWdlKVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImVycm9yTWVzc2FnZVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hc0Vycm9yIHtcclxuICBASW5wdXQoKSBlcnJvck1lc3NhZ2U6IGFueSB8IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgcHVibGljIGlzVGVtcGxhdGUodmFsdWU6IGFueSkge1xyXG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XHJcbiAgfVxyXG59XHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbTWFzRXJyb3JdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlXSxcclxuICBleHBvcnRzOiBbTWFzRXJyb3JdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFzRXJyb3JNb2R1bGUge31cclxuIl19