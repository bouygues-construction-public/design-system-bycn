import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class MasLabel {
    get identifier() {
        return this._identifier;
    }
    set identifier(value) {
        this._identifier = value;
    }
    constructor() {
        this.optional = false;
        this.infoIcon = false;
    }
    ngOnInit() { }
}
MasLabel.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasLabel, deps: [], target: i0.ɵɵFactoryTarget.Component });
MasLabel.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: MasLabel, selector: "mas-label", inputs: { identifier: "identifier", optional: "optional", infoIcon: "infoIcon" }, host: { classAttribute: "mas-label" }, ngImport: i0, template: `
    <label [for]="identifier" class="mas-label-wrapper">
      <ng-content></ng-content>
      <i *ngIf="infoIcon" class="mas-question-outlined mas-label-info-icon"></i>
      <span *ngIf="optional" class="mas-label-optional">(optional)</span>
    </label>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasLabel, decorators: [{
            type: Component,
            args: [{
                    selector: 'mas-label',
                    host: {
                        class: 'mas-label',
                    },
                    template: `
    <label [for]="identifier" class="mas-label-wrapper">
      <ng-content></ng-content>
      <i *ngIf="infoIcon" class="mas-question-outlined mas-label-info-icon"></i>
      <span *ngIf="optional" class="mas-label-optional">(optional)</span>
    </label>
  `,
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { identifier: [{
                type: Input
            }], optional: [{
                type: Input
            }], infoIcon: [{
                type: Input
            }] } });
export class MasLabelModule {
}
MasLabelModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasLabelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MasLabelModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: MasLabelModule, declarations: [MasLabel], imports: [CommonModule, FormsModule], exports: [MasLabel] });
MasLabelModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasLabelModule, imports: [CommonModule, FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasLabelModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, FormsModule],
                    exports: [MasLabel],
                    declarations: [MasLabel],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9zdWItZWxlbWVudHMvbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFlN0MsTUFBTSxPQUFPLFFBQVE7SUFDbkIsSUFDSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFVBQVUsQ0FBQyxLQUFhO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFJRDtRQUZTLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFZLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRWhCLFFBQVEsS0FBSSxDQUFDOztxR0FiRixRQUFRO3lGQUFSLFFBQVEsMEtBUlQ7Ozs7OztHQU1UOzJGQUVVLFFBQVE7a0JBYnBCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsV0FBVztxQkFDbkI7b0JBQ0QsUUFBUSxFQUFFOzs7Ozs7R0FNVDtpQkFDRjswRUFHSyxVQUFVO3NCQURiLEtBQUs7Z0JBUUcsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLOztBQVdSLE1BQU0sT0FBTyxjQUFjOzsyR0FBZCxjQUFjOzRHQUFkLGNBQWMsaUJBckJkLFFBQVEsYUFpQlQsWUFBWSxFQUFFLFdBQVcsYUFqQnhCLFFBQVE7NEdBcUJSLGNBQWMsWUFKZixZQUFZLEVBQUUsV0FBVzsyRkFJeEIsY0FBYztrQkFMMUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDO29CQUNwQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0JBQ25CLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQztpQkFDekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBOZ01vZHVsZSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtYXMtbGFiZWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnbWFzLWxhYmVsJyxcclxuICB9LFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bGFiZWwgW2Zvcl09XCJpZGVudGlmaWVyXCIgY2xhc3M9XCJtYXMtbGFiZWwtd3JhcHBlclwiPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDxpICpuZ0lmPVwiaW5mb0ljb25cIiBjbGFzcz1cIm1hcy1xdWVzdGlvbi1vdXRsaW5lZCBtYXMtbGFiZWwtaW5mby1pY29uXCI+PC9pPlxyXG4gICAgICA8c3BhbiAqbmdJZj1cIm9wdGlvbmFsXCIgY2xhc3M9XCJtYXMtbGFiZWwtb3B0aW9uYWxcIj4ob3B0aW9uYWwpPC9zcGFuPlxyXG4gICAgPC9sYWJlbD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFzTGFiZWwgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGlkZW50aWZpZXIoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9pZGVudGlmaWVyO1xyXG4gIH1cclxuICBzZXQgaWRlbnRpZmllcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9pZGVudGlmaWVyID0gdmFsdWU7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2lkZW50aWZpZXI6IHN0cmluZztcclxuICBASW5wdXQoKSBvcHRpb25hbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGluZm9JY29uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGVdLFxyXG4gIGV4cG9ydHM6IFtNYXNMYWJlbF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTWFzTGFiZWxdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFzTGFiZWxNb2R1bGUge31cclxuIl19