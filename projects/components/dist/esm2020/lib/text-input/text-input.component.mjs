import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import '@masoni/icons/dist/css/mas-icons.css';
import '@masoni/css-text-input/dist/index.css';
import { FormControl, NG_VALUE_ACCESSOR, Validators, } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export class MasTextInput {
    constructor() {
        this.identifier = `text-input-${MasTextInput.textInputCount++}`;
        this._disabled = false;
        this.input = new FormControl('');
        this._value = '';
        this.placeholder = '';
        this.required = false;
        this.size = 'S';
        this.type = 'text';
        this.filled = false;
        this.onChange = new EventEmitter();
        this.inputChangeEvent = new EventEmitter();
        this._invalid = false;
        this.onChangeHandler = (_) => { };
        this.onTouchedHandler = () => { };
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
        value ? this.input.disable() : this.input.enable();
    }
    get labelText() {
        return this._labelText;
    }
    set labelText(value) {
        this._labelText = value;
    }
    set invalid(value) {
        this._invalid = value;
    }
    get invalid() {
        if (this.input) {
            return !this.input?.valid && this.input.touched;
        }
        return this._invalid;
    }
    set value(value) {
        this._value = value;
    }
    get value() {
        return this._value;
    }
    get empty() {
        return this._value === '' ? true : false;
    }
    get leadingIcon() {
        let icon = 'none';
        switch (this.type) {
            case 'search':
                icon = 'mas-magnifyingglass-outlined';
                break;
            case 'email':
                icon = 'mas-envelopesimple-outlined';
                break;
            case 'password':
                icon = 'mas-lockkey-outlined';
                break;
            case 'tel':
                icon = 'mas-phone-outlined';
                break;
        }
        return icon;
    }
    get trailingIcon() {
        return this.type === 'password' ? 'mas-eye-filled' : 'none';
    }
    writeValue(obj) {
        this.input.setValue(obj);
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
    updateModel(event) {
        let newModelValue = this.value;
        this.onChangeHandler(newModelValue);
        this.model = newModelValue;
        if (this.formControl) {
            this.formControl.setValue(newModelValue);
        }
        this.onChange.emit({ value: newModelValue, originalEvent: event });
    }
    handleChange(event) {
        this.updateModel(event);
    }
    showPassword(input) {
        if (input.getAttribute('type') === 'password') {
            input.setAttribute('type', 'text');
        }
        else {
            input.setAttribute('type', 'password');
        }
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.input.valueChanges.subscribe((value) => {
            this.onChangeHandler(value?.trim());
            this.value = value ?? '';
        });
        if (this.type === 'tel') {
            this.input.addValidators(Validators.pattern(/[0-9\+\-\ ]/));
        }
        else if (this.type === 'email') {
            this.input.addValidators(Validators.email);
        }
    }
}
MasTextInput.textInputCount = 0;
MasTextInput.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasTextInput, deps: [], target: i0.ɵɵFactoryTarget.Component });
MasTextInput.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: MasTextInput, selector: "mas-text-input", inputs: { identifier: "identifier", disabled: "disabled", labelText: "labelText", formControlName: "formControlName", placeholder: "placeholder", required: "required", size: "size", formControl: "formControl", type: "type", filled: "filled", invalid: "invalid" }, outputs: { onChange: "onChange", inputChangeEvent: "inputChangeEvent" }, host: { properties: { "class.mas-text-input--invalid": "invalid", "class.mas-text-input--disabled": "disabled", "class.mas-text-input--filled": "filled", "class.mas-text-input--medium": "size === \"M\"" }, classAttribute: "mas-text-input" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: MasTextInput,
            multi: true,
        },
    ], viewQueries: [{ propertyName: "inputViewChild", first: true, predicate: ["textinput"], descendants: true }], ngImport: i0, template: "<ng-content select=\"mas-label\"></ng-content>\r\n<div class=\"mas-text-input_input-wrapper\">\r\n  <i *ngIf=\"leadingIcon !== 'none'\" class=\"{{ leadingIcon }} mas-icon mas-leading-icon\"></i>\r\n  <input\r\n    #textinput\r\n    [id]=\"identifier\"\r\n    class=\"mas-text-input_input mas-text-input-min-line\"\r\n    [type]=\"type\"\r\n    [placeholder]=\"placeholder\"\r\n    [required]=\"required\"\r\n    [formControl]=\"input\"\r\n    [value]=\"value\"\r\n    (change)=\"handleChange($event)\"\r\n  />\r\n  <i\r\n    *ngIf=\"trailingIcon !== 'none'\"\r\n    class=\"{{ trailingIcon }} mas-icon mas-trailing-icon\"\r\n    (click)=\"showPassword(textinput)\"\r\n  ></i>\r\n</div>\r\n<ng-content *ngIf=\"invalid\" select=\"mas-error\"></ng-content>\r\n<ng-content *ngIf=\"!invalid\" select=\"mas-helper\"></ng-content>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasTextInput, decorators: [{
            type: Component,
            args: [{ selector: 'mas-text-input', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: MasTextInput,
                            multi: true,
                        },
                    ], host: {
                        class: 'mas-text-input',
                        '[class.mas-text-input--invalid]': 'invalid',
                        '[class.mas-text-input--disabled]': 'disabled',
                        '[class.mas-text-input--filled]': 'filled',
                        '[class.mas-text-input--medium]': 'size === "M"',
                    }, template: "<ng-content select=\"mas-label\"></ng-content>\r\n<div class=\"mas-text-input_input-wrapper\">\r\n  <i *ngIf=\"leadingIcon !== 'none'\" class=\"{{ leadingIcon }} mas-icon mas-leading-icon\"></i>\r\n  <input\r\n    #textinput\r\n    [id]=\"identifier\"\r\n    class=\"mas-text-input_input mas-text-input-min-line\"\r\n    [type]=\"type\"\r\n    [placeholder]=\"placeholder\"\r\n    [required]=\"required\"\r\n    [formControl]=\"input\"\r\n    [value]=\"value\"\r\n    (change)=\"handleChange($event)\"\r\n  />\r\n  <i\r\n    *ngIf=\"trailingIcon !== 'none'\"\r\n    class=\"{{ trailingIcon }} mas-icon mas-trailing-icon\"\r\n    (click)=\"showPassword(textinput)\"\r\n  ></i>\r\n</div>\r\n<ng-content *ngIf=\"invalid\" select=\"mas-error\"></ng-content>\r\n<ng-content *ngIf=\"!invalid\" select=\"mas-helper\"></ng-content>" }]
        }], propDecorators: { identifier: [{
                type: Input
            }], disabled: [{
                type: Input
            }], labelText: [{
                type: Input
            }], inputViewChild: [{
                type: ViewChild,
                args: ['textinput']
            }], formControlName: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], required: [{
                type: Input
            }], size: [{
                type: Input
            }], formControl: [{
                type: Input
            }], type: [{
                type: Input
            }], filled: [{
                type: Input
            }], onChange: [{
                type: Output
            }], inputChangeEvent: [{
                type: Output
            }], invalid: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3RleHQtaW5wdXQvdGV4dC1pbnB1dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9zcmMvbGliL3RleHQtaW5wdXQvdGV4dC1pbnB1dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxzQ0FBc0MsQ0FBQztBQUM5QyxPQUFPLHVDQUF1QyxDQUFDO0FBQy9DLE9BQU8sRUFFTCxXQUFXLEVBRVgsaUJBQWlCLEVBRWpCLFVBQVUsR0FDWCxNQUFNLGdCQUFnQixDQUFDOzs7O0FBb0J4QixNQUFNLE9BQU8sWUFBWTtJQWxCekI7UUFvQlcsZUFBVSxHQUFXLGNBQWMsWUFBWSxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUM7UUFTbEUsY0FBUyxHQUFZLEtBQUssQ0FBQztRQVEzQixVQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFNUIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUlyQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFNBQUksR0FBYyxHQUFHLENBQUM7UUFFdEIsU0FBSSxHQUFxRCxNQUFNLENBQUM7UUFDaEUsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN2QixhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakQscUJBQWdCLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFXNUQsYUFBUSxHQUF3QixLQUFLLENBQUM7UUErQnRDLG9CQUFlLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUNqQyxxQkFBZ0IsR0FBRyxHQUFHLEVB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WUFBWSw0bUJBZlo7UUFDVDtZQUNFLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsV0FBVyxFQUFFLFlBQVk7WUFDekIsS0FBSyxFQUFFLElBQUk7U0FDWjtLQUNGLHVJQ3JCSCx5ekJBcUI4RDsyRkRTakQsWUFBWTtrQkFsQnhCLFNBQVM7K0JBQ0UsZ0JBQWdCLGFBRWY7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxjQUFjOzRCQUN6QixLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRixRQUNLO3dCQUNKLEtBQUssRUFBRSxnQkFBZ0I7d0JBQ3ZCLGlDQUFpQyxFQUFFLFNBQVM7d0JBQzVDLGtDQUFrQyxFQUFFLFVBQVU7d0JBQzlDLGdDQUFnQyxFQUFFLFFBQVE7d0JBQzFDLGdDQUFnQyxFQUFFLGNBQWM7cUJBQ2pEOzhCQUlRLFVBQVU7c0JBQWxCLEtBQUs7Z0JBRUYsUUFBUTtzQkFEWCxLQUFLO2dCQVVGLFNBQVM7c0JBRFosS0FBSztnQkFXa0IsY0FBYztzQkFBckMsU0FBUzt1QkFBQyxXQUFXO2dCQUNiLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0ksUUFBUTtzQkFBakIsTUFBTTtnQkFDRyxnQkFBZ0I7c0JBQXpCLE1BQU07Z0JBRUgsT0FBTztzQkFEVixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAnQG1hc29uaS9pY29ucy9kaXN0L2Nzcy9tYXMtaWNvbnMuY3NzJztcclxuaW1wb3J0ICdAbWFzb25pL2Nzcy10ZXh0LWlucHV0L2Rpc3QvaW5kZXguY3NzJztcclxuaW1wb3J0IHtcclxuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcclxuICBGb3JtQ29udHJvbCxcclxuICBGb3JtQ29udHJvbE5hbWUsXHJcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgTmdGb3JtLFxyXG4gIFZhbGlkYXRvcnMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtYXMtdGV4dC1pbnB1dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICd0ZXh0LWlucHV0LmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBNYXNUZXh0SW5wdXQsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnbWFzLXRleHQtaW5wdXQnLFxyXG4gICAgJ1tjbGFzcy5tYXMtdGV4dC1pbnB1dC0taW52YWxpZF0nOiAnaW52YWxpZCcsXHJcbiAgICAnW2NsYXNzLm1hcy10ZXh0LWlucHV0LS1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5tYXMtdGV4dC1pbnB1dC0tZmlsbGVkXSc6ICdmaWxsZWQnLFxyXG4gICAgJ1tjbGFzcy5tYXMtdGV4dC1pbnB1dC0tbWVkaXVtXSc6ICdzaXplID09PSBcIk1cIicsXHJcbiAgfSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hc1RleHRJbnB1dCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQge1xyXG4gIHN0YXRpYyB0ZXh0SW5wdXRDb3VudCA9IDA7XHJcbiAgQElucHV0KCkgaWRlbnRpZmllcjogc3RyaW5nID0gYHRleHQtaW5wdXQtJHtNYXNUZXh0SW5wdXQudGV4dElucHV0Q291bnQrK31gO1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWU7XHJcbiAgICB2YWx1ZSA/IHRoaXMuaW5wdXQuZGlzYWJsZSgpIDogdGhpcy5pbnB1dC5lbmFibGUoKTtcclxuICB9XHJcbiAgcHJvdGVjdGVkIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGxhYmVsVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xhYmVsVGV4dDtcclxuICB9XHJcbiAgc2V0IGxhYmVsVGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9sYWJlbFRleHQgPSB2YWx1ZTtcclxuICB9XHJcbiAgcHJvdGVjdGVkIGlucHV0ID0gbmV3IEZvcm1Db250cm9sKCcnKTtcclxuICBwcm90ZWN0ZWQgX2xhYmVsVGV4dDogc3RyaW5nO1xyXG4gIHByb3RlY3RlZCBfdmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gIG1vZGVsOiBhbnk7XHJcbiAgQFZpZXdDaGlsZCgndGV4dGlucHV0JykgaW5wdXRWaWV3Q2hpbGQ6IEVsZW1lbnRSZWYgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCkgZm9ybUNvbnRyb2xOYW1lOiBGb3JtQ29udHJvbE5hbWUgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2l6ZTogJ00nIHwgJ1MnID0gJ1MnO1xyXG4gIEBJbnB1dCgpIGZvcm1Db250cm9sOiBGb3JtQ29udHJvbCB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKSB0eXBlOiAnc2VhcmNoJyB8ICd0ZWwnIHwgJ3RleHQnIHwgJ3Bhc3N3b3JkJyB8ICdlbWFpbCcgPSAndGV4dCc7XHJcbiAgQElucHV0KCkgZmlsbGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgaW5wdXRDaGFuZ2VFdmVudDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQElucHV0KClcclxuICBzZXQgaW52YWxpZCh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xyXG4gICAgdGhpcy5faW52YWxpZCA9IHZhbHVlO1xyXG4gIH1cclxuICBnZXQgaW52YWxpZCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICh0aGlzLmlucHV0KSB7XHJcbiAgICAgIHJldHVybiAhdGhpcy5pbnB1dD8udmFsaWQgJiYgdGhpcy5pbnB1dC50b3VjaGVkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2ludmFsaWQ7XHJcbiAgfVxyXG4gIHByb3RlY3RlZCBfaW52YWxpZDogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IGZhbHNlO1xyXG4gIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuICBnZXQgdmFsdWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcbiAgZ2V0IGVtcHR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlID09PSAnJyA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcbiAgZ2V0IGxlYWRpbmdJY29uKCk6IHN0cmluZyB7XHJcbiAgICBsZXQgaWNvbjogc3RyaW5nID0gJ25vbmUnO1xyXG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcclxuICAgICAgY2FzZSAnc2VhcmNoJzpcclxuICAgICAgICBpY29uID0gJ21hcy1tYWduaWZ5aW5nZ2xhc3Mtb3V0bGluZWQnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdlbWFpbCc6XHJcbiAgICAgICAgaWNvbiA9ICdtYXMtZW52ZWxvcGVzaW1wbGUtb3V0bGluZWQnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdwYXNzd29yZCc6XHJcbiAgICAgICAgaWNvbiA9ICdtYXMtbG9ja2tleS1vdXRsaW5lZCc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RlbCc6XHJcbiAgICAgICAgaWNvbiA9ICdtYXMtcGhvbmUtb3V0bGluZWQnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGljb247XHJcbiAgfVxyXG4gIGdldCB0cmFpbGluZ0ljb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICdwYXNzd29yZCcgPyAnbWFzLWV5ZS1maWxsZWQnIDogJ25vbmUnO1xyXG4gIH1cclxuICBwcm90ZWN0ZWQgb25DaGFuZ2VIYW5kbGVyID0gKF86IGFueSkgPT4ge307XHJcbiAgcHJvdGVjdGVkIG9uVG91Y2hlZEhhbmRsZXIgPSAoKSA9PiB7fTtcclxuICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLmlucHV0LnNldFZhbHVlKG9iaik7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZUhhbmRsZXIgPSBmbjtcclxuICB9XHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWRIYW5kbGVyID0gZm47XHJcbiAgfVxyXG4gIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuICB1cGRhdGVNb2RlbChldmVudDogRXZlbnQpIHtcclxuICAgIGxldCBuZXdNb2RlbFZhbHVlID0gdGhpcy52YWx1ZTtcclxuXHJcbiAgICB0aGlzLm9uQ2hhbmdlSGFuZGxlcihuZXdNb2RlbFZhbHVlKTtcclxuICAgIHRoaXMubW9kZWwgPSBuZXdNb2RlbFZhbHVlO1xyXG4gICAgaWYgKHRoaXMuZm9ybUNvbnRyb2wpIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZShuZXdNb2RlbFZhbHVlKTtcclxuICAgIH1cclxuICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7IHZhbHVlOiBuZXdNb2RlbFZhbHVlLCBvcmlnaW5hbEV2ZW50OiBldmVudCB9KTtcclxuICB9XHJcbiAgaGFuZGxlQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xyXG4gICAgdGhpcy51cGRhdGVNb2RlbChldmVudCk7XHJcbiAgfVxyXG4gIHNob3dQYXNzd29yZChpbnB1dDogSFRNTEVsZW1lbnQpIHtcclxuICAgIGlmIChpbnB1dC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSA9PT0gJ3Bhc3N3b3JkJykge1xyXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3Bhc3N3b3JkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG5nT25Jbml0KCkge31cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlucHV0LnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VIYW5kbGVyKHZhbHVlPy50cmltKCkpO1xyXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWUgPz8gJyc7XHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLnR5cGUgPT09ICd0ZWwnKSB7XHJcbiAgICAgIHRoaXMuaW5wdXQuYWRkVmFsaWRhdG9ycyhWYWxpZGF0b3JzLnBhdHRlcm4oL1swLTlcXCtcXC1cXCBdLykpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdlbWFpbCcpIHtcclxuICAgICAgdGhpcy5pbnB1dC5hZGRWYWxpZGF0b3JzKFZhbGlkYXRvcnMuZW1haWwpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8bmctY29udGVudCBzZWxlY3Q9XCJtYXMtbGFiZWxcIj48L25nLWNvbnRlbnQ+XHJcbjxkaXYgY2xhc3M9XCJtYXMtdGV4dC1pbnB1dF9pbnB1dC13cmFwcGVyXCI+XHJcbiAgPGkgKm5nSWY9XCJsZWFkaW5nSWNvbiAhPT0gJ25vbmUnXCIgY2xhc3M9XCJ7eyBsZWFkaW5nSWNvbiB9fSBtYXMtaWNvbiBtYXMtbGVhZGluZy1pY29uXCI+PC9pPlxyXG4gIDxpbnB1dFxyXG4gICAgI3RleHRpbnB1dFxyXG4gICAgW2lkXT1cImlkZW50aWZpZXJcIlxyXG4gICAgY2xhc3M9XCJtYXMtdGV4dC1pbnB1dF9pbnB1dCBtYXMtdGV4dC1pbnB1dC1taW4tbGluZVwiXHJcbiAgICBbdHlwZV09XCJ0eXBlXCJcclxuICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxyXG4gICAgW2Zvcm1Db250cm9sXT1cImlucHV0XCJcclxuICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICAoY2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCJcclxuICAvPlxyXG4gIDxpXHJcbiAgICAqbmdJZj1cInRyYWlsaW5nSWNvbiAhPT0gJ25vbmUnXCJcclxuICAgIGNsYXNzPVwie3sgdHJhaWxpbmdJY29uIH19IG1hcy1pY29uIG1hcy10cmFpbGluZy1pY29uXCJcclxuICAgIChjbGljayk9XCJzaG93UGFzc3dvcmQodGV4dGlucHV0KVwiXHJcbiAgPjwvaT5cclxuPC9kaXY+XHJcbjxuZy1jb250ZW50ICpuZ0lmPVwiaW52YWxpZFwiIHNlbGVjdD1cIm1hcy1lcnJvclwiPjwvbmctY29udGVudD5cclxuPG5nLWNvbnRlbnQgKm5nSWY9XCIhaW52YWxpZFwiIHNlbGVjdD1cIm1hcy1oZWxwZXJcIj48L25nLWNvbnRlbnQ+Il19