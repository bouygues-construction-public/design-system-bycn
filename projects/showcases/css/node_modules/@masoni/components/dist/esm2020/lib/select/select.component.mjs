import { Component, ContentChildren, EventEmitter, Input, Output, TemplateRef, HostListener, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import '@masoni/css-select/dist/index.css';
import { MasOption } from './option.component';
import { Subject, defer, merge, startWith, switchMap, take, takeUntil } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class MasSelect {
    set value(value) {
        this._value = value;
    }
    get value() {
        if (this.empty) {
            return '';
        }
        return this.options.filter((option) => option.selected)[0].value;
    }
    get placeholder() {
        return this._placeholder;
    }
    set placeholder(value) {
        this._placeholder = value;
    }
    get panelOpen() {
        return this._panelOpen;
    }
    get triggerValue() {
        if (this.empty) {
            return '';
        }
        return this.selected.option?.text;
    }
    get empty() {
        return !this.options || this.selected.isSelected === false;
    }
    ngAfterContentInit() {
        this.options.changes.pipe(startWith(null), takeUntil(this._destroy)).subscribe(() => {
            this._resetOptions();
        });
    }
    constructor(_ngZone, eRef) {
        this._ngZone = _ngZone;
        this.eRef = eRef;
        this._value = '';
        this.selected = { option: undefined, isSelected: false };
        this._panelOpen = false;
        this.identifier = `select-${MasSelect.selectCount++}`;
        this.disabled = false;
        this.invalid = false;
        this.size = 'S';
        this.filled = false;
        this.change = new EventEmitter();
        this._destroy = new Subject();
        this.optionChanges = defer(() => {
            const options = this.options;
            if (options) {
                return options.changes.pipe(startWith(options), switchMap(() => merge(...options.map((option) => option.onChange))));
            }
            return this._ngZone.onStable.pipe(take(1), switchMap(() => this.optionChanges));
        });
        this.onChangeHandler = (_) => { };
        this.onTouchedHandler = () => { };
    }
    clickOut(event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.close();
        }
    }
    _resetOptions() {
        const changedOrDestroyed = merge(this.options.changes, this._destroy);
        this.optionChanges.pipe(takeUntil(changedOrDestroyed)).subscribe((event) => {
            this._onSelect(event.option);
            if (this._panelOpen) {
                this.close();
                this.focusOut();
            }
        });
    }
    _onSelect(option) {
        if (option.value == null) {
            option.deselect();
        }
        else if (!option.selected) {
            this.options.map((option) => {
                if (option.selected)
                    option.deselect();
            });
            option.select();
            this.selected.isSelected = true;
            this.selected.option = this.options.filter((option) => option.selected)[0];
        }
    }
    toggle() {
        this.panelOpen ? this.close() : this.open();
    }
    open() {
        this._panelOpen = true;
    }
    close() {
        this._panelOpen = false;
    }
    focus() { }
    onChange(event) {
        this.onChangeHandler(event.target.value);
        this.change.emit(event.target.value);
    }
    focusOut() {
        this.onTouchedHandler();
    }
    isTemplate(value) {
        return value instanceof TemplateRef;
    }
    writeValue(obj) {
        this.value = obj;
    }
    registerOnChange(fn) {
        this.onChangeHandler = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedHandler = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
MasSelect.selectCount = 0;
MasSelect.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasSelect, deps: [{ token: i0.NgZone }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
MasSelect.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: MasSelect, selector: "mas-select", inputs: { label: "label", identifier: "identifier", disabled: "disabled", invalid: "invalid", size: "size", filled: "filled", value: "value", placeholder: "placeholder" }, outputs: { change: "change" }, host: { listeners: { "document:click": "clickOut($event)" }, properties: { "class.mas-select--invalid": "invalid", "class.mas-select--disabled": "disabled", "class.mas-select--medium": "size === \"M\"", "class.mas-select--small": "size === \"S\"" }, classAttribute: "mas-select" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: MasSelect,
            multi: true,
        },
    ], queries: [{ propertyName: "options", predicate: MasOption }], ngImport: i0, template: "<ng-content select=\"mas-label\"></ng-content>\r\n<div\r\n  class=\"mas-select_value-wrapper\"\r\n  [ngSwitch]=\"empty\"\r\n  (click)=\"toggle()\"\r\n  (change)=\"onChange($event)\"\r\n  [ngClass]=\"{ 'mas-select_listbox--opened': panelOpen }\"\r\n>\r\n  <i class=\"mas-warningcircle-outlined mas-icon\" *ngSwitchCase=\"true\"></i>\r\n  <span\r\n    class=\"mas-select-placeholder mas-select-min-line\"\r\n    *ngSwitchCase=\"true\"\r\n    [ngClass]=\"{ 'mas-select--filled': filled }\"\r\n    >{{ placeholder }}</span\r\n  >\r\n  <span class=\"mas-select_text mas-select-min-line\" *ngSwitchCase=\"false\">\r\n    {{ triggerValue }}\r\n  </span>\r\n  <i class=\"mas-caretdown-outlined mas-icon\"></i>\r\n</div>\r\n<!-- ! listbox -->\r\n<ng-template [ngIf]=\"panelOpen && !disabled\">\r\n    <div #select role=\"listbox\" [ngClass]=\"{ 'mas-select--disabled': disabled }\" class=\"mas-select_listbox-wrapper\">\r\n        <ng-content select=\"mas-option\"></ng-content>\r\n    </div>\r\n</ng-template>\r\n<ng-content *ngIf=\"invalid\" select=\"mas-error\"></ng-content>\r\n<ng-content *ngIf=\"!invalid\" select=\"mas-helper\"></ng-content>\r\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasSelect, decorators: [{
            type: Component,
            args: [{ selector: 'mas-select', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: MasSelect,
                            multi: true,
                        },
                    ], host: {
                        class: 'mas-select',
                        '[class.mas-select--invalid]': 'invalid',
                        '[class.mas-select--disabled]': 'disabled',
                        '[class.mas-select--medium]': 'size === "M"',
                        '[class.mas-select--small]': 'size === "S"'
                    }, template: "<ng-content select=\"mas-label\"></ng-content>\r\n<div\r\n  class=\"mas-select_value-wrapper\"\r\n  [ngSwitch]=\"empty\"\r\n  (click)=\"toggle()\"\r\n  (change)=\"onChange($event)\"\r\n  [ngClass]=\"{ 'mas-select_listbox--opened': panelOpen }\"\r\n>\r\n  <i class=\"mas-warningcircle-outlined mas-icon\" *ngSwitchCase=\"true\"></i>\r\n  <span\r\n    class=\"mas-select-placeholder mas-select-min-line\"\r\n    *ngSwitchCase=\"true\"\r\n    [ngClass]=\"{ 'mas-select--filled': filled }\"\r\n    >{{ placeholder }}</span\r\n  >\r\n  <span class=\"mas-select_text mas-select-min-line\" *ngSwitchCase=\"false\">\r\n    {{ triggerValue }}\r\n  </span>\r\n  <i class=\"mas-caretdown-outlined mas-icon\"></i>\r\n</div>\r\n<!-- ! listbox -->\r\n<ng-template [ngIf]=\"panelOpen && !disabled\">\r\n    <div #select role=\"listbox\" [ngClass]=\"{ 'mas-select--disabled': disabled }\" class=\"mas-select_listbox-wrapper\">\r\n        <ng-content select=\"mas-option\"></ng-content>\r\n    </div>\r\n</ng-template>\r\n<ng-content *ngIf=\"invalid\" select=\"mas-error\"></ng-content>\r\n<ng-content *ngIf=\"!invalid\" select=\"mas-helper\"></ng-content>\r\n" }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }, { type: i0.ElementRef }]; }, propDecorators: { label: [{
                type: Input
            }], identifier: [{
                type: Input
            }], disabled: [{
                type: Input
            }], invalid: [{
                type: Input
            }], size: [{
                type: Input
            }], filled: [{
                type: Input
            }], value: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], change: [{
                type: Output
            }], options: [{
                type: ContentChildren,
                args: [MasOption]
            }], clickOut: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9zcmMvbGliL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxlQUFlLEVBRWYsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBR04sV0FBVyxFQUVYLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxtQ0FBbUMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxLQUFLLEVBQU8sS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBTyxNQUFNLE1BQU0sQ0FBQzs7O0FBdUIxRyxNQUFNLE9BQU8sU0FBUztJQWFwQixJQUNJLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxJQUFJLEtBQUs7UUFDUCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNuRSxDQUFDO0lBQ0QsSUFDSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFJLFdBQVcsQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUdELElBQUksWUFBWTtRQUNkLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQztJQUNwQyxDQUFDO0lBQ0QsSUFBSSxLQUFLO1FBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFDO0lBQzdELENBQUM7SUFHRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNsRixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsWUFBc0IsT0FBZSxFQUFZLElBQWdCO1FBQTNDLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFBWSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBakR2RCxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLGFBQVEsR0FBbUIsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUN0RSxlQUFVLEdBQVksS0FBSyxDQUFDO1FBSTNCLGVBQVUsR0FBRyxVQUFVLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO1FBQ2pELGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixTQUFJLEdBQWMsR0FBRyxDQUFDO1FBQ3RCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFxQnZCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdCLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBd0IvQixrQkFBYSxHQUFvQixLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ25ELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0IsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDekIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUNsQixTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FDcEUsQ0FBQzthQUNIO1lBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQy9CLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUNwQyxDQUFDO1FBQ0osQ0FBQyxDQUFvQixDQUFDO1FBNENaLG9CQUFlLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUNqQyxxQkFBZ0IsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7SUFoRThCLENBQUM7SUFFckUsUUFBUSxDQUFDLEtBQVk7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbkQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBY08sYUFBYTtRQUNuQixNQUFNLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN6RSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDYixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDakI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDTyxTQUFTLENBQUMsTUFBaUI7UUFDakMsSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtZQUN4QixNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7YUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUMxQixJQUFJLE1BQU0sQ0FBQyxRQUFRO29CQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN6QyxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1RTtJQUNILENBQUM7SUFDRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUNELElBQUk7UUFDRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBQ0QsS0FBSztRQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxLQUFLLEtBQUksQ0FBQztJQUNWLFFBQVEsQ0FBQyxLQUFVO1FBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNNLFVBQVUsQ0FBQyxLQUFVO1FBQzFCLE9BQU8sS0FBSyxZQUFZLFdBQVcsQ0FBQztJQUN0QyxDQUFDO0lBS0QsVUFBVSxDQUFDLEdBQVE7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUNELGdCQUFnQixDQUFDLEVBQU87UUFDdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNELGlCQUFpQixDQUFDLEVBQU87UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBQ0QsZ0JBQWdCLENBQUUsVUFBbUI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQzs7QUEvSE0scUJBQVcsR0FBRyxDQUFDLENBQUM7c0dBRFosU0FBUzswRkFBVCxTQUFTLDBnQkFmVDtRQUNUO1lBQ0UsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixXQUFXLEVBQUUsU0FBUztZQUN0QixLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0Ysa0RBcURnQixTQUFTLDZCQ3BGNUIseW5DQTRCQTsyRkRZYSxTQUFTO2tCQWxCckIsU0FBUzsrQkFDRSxZQUFZLGFBRVg7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxXQUFXOzRCQUN0QixLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRixRQUNLO3dCQUNKLEtBQUssRUFBRSxZQUFZO3dCQUNuQiw2QkFBNkIsRUFBRSxTQUFTO3dCQUN4Qyw4QkFBOEIsRUFBRSxVQUFVO3dCQUMxQyw0QkFBNEIsRUFBRSxjQUFjO3dCQUM1QywyQkFBMkIsRUFBRSxjQUFjO3FCQUM1QztzSEFTUSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUVGLEtBQUs7c0JBRFIsS0FBSztnQkFXRixXQUFXO3NCQURkLEtBQUs7Z0JBVUksTUFBTTtzQkFBZixNQUFNO2dCQVdxQixPQUFPO3NCQUFsQyxlQUFlO3VCQUFDLFNBQVM7Z0JBUzFCLFFBQVE7c0JBRFAsWUFBWTt1QkFBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBOZ1pvbmUsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCAnQG1hc29uaS9jc3Mtc2VsZWN0L2Rpc3QvaW5kZXguY3NzJztcclxuaW1wb3J0IHsgTWFzT3B0aW9uIH0gZnJvbSAnLi9vcHRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgZGVmZXIsIG1hcCwgbWVyZ2UsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwLCB0YWtlLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMnO1xyXG5leHBvcnQgaW50ZXJmYWNlIHNlbGVjdGVkT3B0aW9uIHtcclxuICBvcHRpb246IE1hc09wdGlvbiB8IHVuZGVmaW5lZDtcclxuICBpc1NlbGVjdGVkOiBib29sZWFuO1xyXG59XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWFzLXNlbGVjdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogTWFzU2VsZWN0LFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ21hcy1zZWxlY3QnLFxyXG4gICAgJ1tjbGFzcy5tYXMtc2VsZWN0LS1pbnZhbGlkXSc6ICdpbnZhbGlkJyxcclxuICAgICdbY2xhc3MubWFzLXNlbGVjdC0tZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcclxuICAgICdbY2xhc3MubWFzLXNlbGVjdC0tbWVkaXVtXSc6ICdzaXplID09PSBcIk1cIicsXHJcbiAgICAnW2NsYXNzLm1hcy1zZWxlY3QtLXNtYWxsXSc6ICdzaXplID09PSBcIlNcIidcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXNTZWxlY3QgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgc3RhdGljIHNlbGVjdENvdW50ID0gMDtcclxuICBwcm90ZWN0ZWQgX3ZhbHVlOiBzdHJpbmcgPSAnJztcclxuICBwcm90ZWN0ZWQgc2VsZWN0ZWQ6IHNlbGVjdGVkT3B0aW9uID0geyBvcHRpb246IHVuZGVmaW5lZCwgaXNTZWxlY3RlZDogZmFsc2UgfTtcclxuICBwcml2YXRlIF9wYW5lbE9wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBsYWJlbDogYW55IHwgVGVtcGxhdGVSZWY8YW55PjtcclxuICBASW5wdXQoKSBpZGVudGlmaWVyID0gYHNlbGVjdC0ke01hc1NlbGVjdC5zZWxlY3RDb3VudCsrfWA7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBpbnZhbGlkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2l6ZTogJ00nIHwgJ1MnID0gJ1MnO1xyXG4gIEBJbnB1dCgpIGZpbGxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG4gIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuZW1wdHkpIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnNlbGVjdGVkKVswXS52YWx1ZTtcclxuICB9XHJcbiAgQElucHV0KClcclxuICBnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9wbGFjZWhvbGRlcjtcclxuICB9XHJcbiAgc2V0IHBsYWNlaG9sZGVyKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdmFsdWU7XHJcbiAgfVxyXG4gIGdldCBwYW5lbE9wZW4oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFuZWxPcGVuO1xyXG4gIH1cclxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIHJlYWRvbmx5IF9kZXN0cm95ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBnZXQgdHJpZ2dlclZhbHVlKCkge1xyXG4gICAgaWYgKHRoaXMuZW1wdHkpIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQub3B0aW9uPy50ZXh0O1xyXG4gIH1cclxuICBnZXQgZW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMub3B0aW9ucyB8fCB0aGlzLnNlbGVjdGVkLmlzU2VsZWN0ZWQgPT09IGZhbHNlO1xyXG4gIH1cclxuICBAQ29udGVudENoaWxkcmVuKE1hc09wdGlvbikgb3B0aW9uczogUXVlcnlMaXN0PE1hc09wdGlvbj47XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMub3B0aW9ucy5jaGFuZ2VzLnBpcGUoc3RhcnRXaXRoKG51bGwpLCB0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuX3Jlc2V0T3B0aW9ucygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfbmdab25lOiBOZ1pvbmUsIHByb3RlY3RlZCBlUmVmOiBFbGVtZW50UmVmKSB7fVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcclxuICBjbGlja091dChldmVudDogRXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5lUmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlYWRvbmx5IG9wdGlvbkNoYW5nZXM6IE9ic2VydmFibGU8YW55PiA9IGRlZmVyKCgpID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcbiAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICByZXR1cm4gb3B0aW9ucy5jaGFuZ2VzLnBpcGUoXHJcbiAgICAgICAgc3RhcnRXaXRoKG9wdGlvbnMpLFxyXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiBtZXJnZSguLi5vcHRpb25zLm1hcCgob3B0aW9uKSA9PiBvcHRpb24ub25DaGFuZ2UpKSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9uZ1pvbmUub25TdGFibGUucGlwZShcclxuICAgICAgdGFrZSgxKSxcclxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMub3B0aW9uQ2hhbmdlcylcclxuICAgICk7XHJcbiAgfSkgYXMgT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIHByaXZhdGUgX3Jlc2V0T3B0aW9ucygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNoYW5nZWRPckRlc3Ryb3llZCA9IG1lcmdlKHRoaXMub3B0aW9ucy5jaGFuZ2VzLCB0aGlzLl9kZXN0cm95KTtcclxuICAgIHRoaXMub3B0aW9uQ2hhbmdlcy5waXBlKHRha2VVbnRpbChjaGFuZ2VkT3JEZXN0cm95ZWQpKS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuX29uU2VsZWN0KGV2ZW50Lm9wdGlvbik7XHJcbiAgICAgIGlmICh0aGlzLl9wYW5lbE9wZW4pIHtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5mb2N1c091dCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfb25TZWxlY3Qob3B0aW9uOiBNYXNPcHRpb24pOiB2b2lkIHtcclxuICAgIGlmIChvcHRpb24udmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICBvcHRpb24uZGVzZWxlY3QoKTtcclxuICAgIH0gZWxzZSBpZiAoIW9wdGlvbi5zZWxlY3RlZCkge1xyXG4gICAgICB0aGlzLm9wdGlvbnMubWFwKChvcHRpb24pID0+IHtcclxuICAgICAgICBpZiAob3B0aW9uLnNlbGVjdGVkKSBvcHRpb24uZGVzZWxlY3QoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIG9wdGlvbi5zZWxlY3QoKTtcclxuICAgICAgdGhpcy5zZWxlY3RlZC5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zZWxlY3RlZC5vcHRpb24gPSB0aGlzLm9wdGlvbnMuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi5zZWxlY3RlZClbMF07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRvZ2dsZSgpIHtcclxuICAgIHRoaXMucGFuZWxPcGVuID8gdGhpcy5jbG9zZSgpIDogdGhpcy5vcGVuKCk7XHJcbiAgfVxyXG4gIG9wZW4oKSB7XHJcbiAgICB0aGlzLl9wYW5lbE9wZW4gPSB0cnVlO1xyXG4gIH1cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMuX3BhbmVsT3BlbiA9IGZhbHNlO1xyXG4gIH1cclxuICBmb2N1cygpIHt9XHJcbiAgb25DaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5vbkNoYW5nZUhhbmRsZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIHRoaXMuY2hhbmdlLmVtaXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcbiAgZm9jdXNPdXQoKSB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZEhhbmRsZXIoKTtcclxuICB9XHJcbiAgcHVibGljIGlzVGVtcGxhdGUodmFsdWU6IGFueSkge1xyXG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgb25DaGFuZ2VIYW5kbGVyID0gKF86IGFueSkgPT4ge307XHJcbiAgcHJvdGVjdGVkIG9uVG91Y2hlZEhhbmRsZXIgPSAoKSA9PiB7fTtcclxuXHJcbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IG9iajtcclxuICB9XHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlSGFuZGxlciA9IGZuO1xyXG4gIH1cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZEhhbmRsZXIgPSBmbjtcclxuICB9XHJcbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG59XHJcbiIsIjxuZy1jb250ZW50IHNlbGVjdD1cIm1hcy1sYWJlbFwiPjwvbmctY29udGVudD5cclxuPGRpdlxyXG4gIGNsYXNzPVwibWFzLXNlbGVjdF92YWx1ZS13cmFwcGVyXCJcclxuICBbbmdTd2l0Y2hdPVwiZW1wdHlcIlxyXG4gIChjbGljayk9XCJ0b2dnbGUoKVwiXHJcbiAgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCJcclxuICBbbmdDbGFzc109XCJ7ICdtYXMtc2VsZWN0X2xpc3Rib3gtLW9wZW5lZCc6IHBhbmVsT3BlbiB9XCJcclxuPlxyXG4gIDxpIGNsYXNzPVwibWFzLXdhcm5pbmdjaXJjbGUtb3V0bGluZWQgbWFzLWljb25cIiAqbmdTd2l0Y2hDYXNlPVwidHJ1ZVwiPjwvaT5cclxuICA8c3BhblxyXG4gICAgY2xhc3M9XCJtYXMtc2VsZWN0LXBsYWNlaG9sZGVyIG1hcy1zZWxlY3QtbWluLWxpbmVcIlxyXG4gICAgKm5nU3dpdGNoQ2FzZT1cInRydWVcIlxyXG4gICAgW25nQ2xhc3NdPVwieyAnbWFzLXNlbGVjdC0tZmlsbGVkJzogZmlsbGVkIH1cIlxyXG4gICAgPnt7IHBsYWNlaG9sZGVyIH19PC9zcGFuXHJcbiAgPlxyXG4gIDxzcGFuIGNsYXNzPVwibWFzLXNlbGVjdF90ZXh0IG1hcy1zZWxlY3QtbWluLWxpbmVcIiAqbmdTd2l0Y2hDYXNlPVwiZmFsc2VcIj5cclxuICAgIHt7IHRyaWdnZXJWYWx1ZSB9fVxyXG4gIDwvc3Bhbj5cclxuICA8aSBjbGFzcz1cIm1hcy1jYXJldGRvd24tb3V0bGluZWQgbWFzLWljb25cIj48L2k+XHJcbjwvZGl2PlxyXG48IS0tICEgbGlzdGJveCAtLT5cclxuPG5nLXRlbXBsYXRlIFtuZ0lmXT1cInBhbmVsT3BlbiAmJiAhZGlzYWJsZWRcIj5cclxuICAgIDxkaXYgI3NlbGVjdCByb2xlPVwibGlzdGJveFwiIFtuZ0NsYXNzXT1cInsgJ21hcy1zZWxlY3QtLWRpc2FibGVkJzogZGlzYWJsZWQgfVwiIGNsYXNzPVwibWFzLXNlbGVjdF9saXN0Ym94LXdyYXBwZXJcIj5cclxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJtYXMtb3B0aW9uXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbjxuZy1jb250ZW50ICpuZ0lmPVwiaW52YWxpZFwiIHNlbGVjdD1cIm1hcy1lcnJvclwiPjwvbmctY29udGVudD5cclxuPG5nLWNvbnRlbnQgKm5nSWY9XCIhaW52YWxpZFwiIHNlbGVjdD1cIm1hcy1oZWxwZXJcIj48L25nLWNvbnRlbnQ+XHJcbiJdfQ==