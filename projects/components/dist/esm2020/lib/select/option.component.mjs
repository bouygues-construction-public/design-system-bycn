import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import '@masoni/icons/dist/css/mas-icons.css';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class MasOption {
    constructor() {
        this._selected = false;
        this.value = '';
        this.size = 'S'; // todo: follow parent
        this.onChange = new EventEmitter();
        this.onClick = new EventEmitter();
    }
    get text() {
        return this._text?.nativeElement.outerText;
    }
    get selected() {
        return this._selected;
    }
    onOptionClick(event) {
        this.onChange.emit({ originalEvent: event, option: this });
    }
    select() {
        if (!this._selected) {
            this._selected = true;
        }
    }
    deselect() {
        if (this._selected) {
            this._selected = false;
        }
    }
}
MasOption.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasOption, deps: [], target: i0.ɵɵFactoryTarget.Component });
MasOption.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: MasOption, selector: "mas-option", inputs: { value: "value", disabled: "disabled", size: "size" }, outputs: { onChange: "onChange", onClick: "onClick" }, host: { attributes: { "role": "option" }, listeners: { "click": "onOptionClick($event)" }, properties: { "class.mas-option--selected": "_selected" }, classAttribute: "mas-option" }, viewQueries: [{ propertyName: "_text", first: true, predicate: ["text"], descendants: true, static: true }], ngImport: i0, template: `<i class="mas-check-outlined mas-icon" *ngIf="selected"></i>
    <span class="mas-typo_body-3 mas-option_text" #text><ng-content></ng-content></span> `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasOption, decorators: [{
            type: Component,
            args: [{
                    selector: 'mas-option',
                    template: `<i class="mas-check-outlined mas-icon" *ngIf="selected"></i>
    <span class="mas-typo_body-3 mas-option_text" #text><ng-content></ng-content></span> `,
                    host: {
                        '[class.mas-option--selected]': '_selected',
                        class: 'mas-option',
                        '(click)': 'onOptionClick($event)',
                        role: 'option',
                    },
                }]
        }], propDecorators: { value: [{
                type: Input
            }], disabled: [{
                type: Input
            }], size: [{
                type: Input
            }], onChange: [{
                type: Output
            }], onClick: [{
                type: Output
            }], _text: [{
                type: ViewChild,
                args: ['text', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VsZWN0L29wdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxzQ0FBc0MsQ0FBQzs7O0FBYTlDLE1BQU0sT0FBTyxTQUFTO0lBWHRCO1FBWVUsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMxQixVQUFLLEdBQVEsRUFBRSxDQUFDO1FBRWhCLFNBQUksR0FBYyxHQUFHLENBQUMsQ0FBQyxzQkFBc0I7UUFDNUMsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pELFlBQU8sR0FBNkIsSUFBSSxZQUFZLEVBQWMsQ0FBQztLQXFCOUU7SUFuQkMsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDN0MsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsYUFBYSxDQUFDLEtBQVk7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDRCxNQUFNO1FBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBQ0QsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4QjtJQUNILENBQUM7O3NHQTFCVSxTQUFTOzBGQUFULFNBQVMsNGNBVFY7MEZBQzhFOzJGQVE3RSxTQUFTO2tCQVhyQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUU7MEZBQzhFO29CQUN4RixJQUFJLEVBQUU7d0JBQ0osOEJBQThCLEVBQUUsV0FBVzt3QkFDM0MsS0FBSyxFQUFFLFlBQVk7d0JBQ25CLFNBQVMsRUFBRSx1QkFBdUI7d0JBQ2xDLElBQUksRUFBRSxRQUFRO3FCQUNmO2lCQUNGOzhCQUdVLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDSSxRQUFRO3NCQUFqQixNQUFNO2dCQUNHLE9BQU87c0JBQWhCLE1BQU07Z0JBQzhCLEtBQUs7c0JBQXpDLFNBQVM7dUJBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgJ0BtYXNvbmkvaWNvbnMvZGlzdC9jc3MvbWFzLWljb25zLmNzcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21hcy1vcHRpb24nLFxyXG4gIHRlbXBsYXRlOiBgPGkgY2xhc3M9XCJtYXMtY2hlY2stb3V0bGluZWQgbWFzLWljb25cIiAqbmdJZj1cInNlbGVjdGVkXCI+PC9pPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJtYXMtdHlwb19ib2R5LTMgbWFzLW9wdGlvbl90ZXh0XCIgI3RleHQ+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pjwvc3Bhbj4gYCxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLm1hcy1vcHRpb24tLXNlbGVjdGVkXSc6ICdfc2VsZWN0ZWQnLFxyXG4gICAgY2xhc3M6ICdtYXMtb3B0aW9uJyxcclxuICAgICcoY2xpY2spJzogJ29uT3B0aW9uQ2xpY2soJGV2ZW50KScsXHJcbiAgICByb2xlOiAnb3B0aW9uJyxcclxuICB9LFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFzT3B0aW9uIHtcclxuICBwcml2YXRlIF9zZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBhbnkgPSAnJztcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzaXplOiAnUycgfCAnTScgPSAnUyc7IC8vIHRvZG86IGZvbGxvdyBwYXJlbnRcclxuICBAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcbiAgQFZpZXdDaGlsZCgndGV4dCcsIHsgc3RhdGljOiB0cnVlIH0pIF90ZXh0OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiB8IHVuZGVmaW5lZDtcclxuICBnZXQgdGV4dCgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RleHQ/Lm5hdGl2ZUVsZW1lbnQub3V0ZXJUZXh0O1xyXG4gIH1cclxuICBnZXQgc2VsZWN0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XHJcbiAgfVxyXG4gIG9uT3B0aW9uQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoeyBvcmlnaW5hbEV2ZW50OiBldmVudCwgb3B0aW9uOiB0aGlzIH0pO1xyXG4gIH1cclxuICBzZWxlY3QoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuX3NlbGVjdGVkKSB7XHJcbiAgICAgIHRoaXMuX3NlbGVjdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgZGVzZWxlY3QoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fc2VsZWN0ZWQpIHtcclxuICAgICAgdGhpcy5fc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19