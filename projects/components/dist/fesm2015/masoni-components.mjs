import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, ViewChild, Output, TemplateRef, NgModule, ContentChildren, HostListener, Directive, HostBinding } from '@angular/core';
import '@masoni/icons/dist/css/mas-icons.css';
import '@masoni/css-text-input/dist/index.css';
import * as i2 from '@angular/forms';
import { FormControl, Validators, NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import '@masoni/css-sub-elements/dist/index.css';
import '@masoni/css-select/dist/index.css';
import { startWith, takeUntil, Subject, defer, switchMap, merge, take } from 'rxjs';

class MasTextInput {
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
        var _a;
        if (this.input) {
            return !((_a = this.input) === null || _a === void 0 ? void 0 : _a.valid) && this.input.touched;
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
            this.onChangeHandler(value === null || value === void 0 ? void 0 : value.trim());
            this.value = value !== null && value !== void 0 ? value : '';
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

class MasError {
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
class MasErrorModule {
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

class MasHelper {
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
class MasHelperModule {
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

class MasLabel {
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
class MasLabelModule {
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

class MasTextInputModule {
}
MasTextInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasTextInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MasTextInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: MasTextInputModule, declarations: [MasTextInput], imports: [CommonModule, MasErrorModule, MasLabelModule, MasHelperModule, ReactiveFormsModule], exports: [MasTextInput] });
MasTextInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasTextInputModule, imports: [CommonModule, MasErrorModule, MasLabelModule, MasHelperModule, ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasTextInputModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, MasErrorModule, MasLabelModule, MasHelperModule, ReactiveFormsModule],
                    declarations: [MasTextInput],
                    exports: [MasTextInput],
                    providers: [],
                }]
        }] });

class MasOption {
    constructor() {
        this._selected = false;
        this.value = '';
        this.size = 'S'; // todo: follow parent
        this.onChange = new EventEmitter();
        this.onClick = new EventEmitter();
    }
    get text() {
        var _a;
        return (_a = this._text) === null || _a === void 0 ? void 0 : _a.nativeElement.outerText;
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

class MasSelect {
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
        var _a;
        if (this.empty) {
            return '';
        }
        return (_a = this.selected.option) === null || _a === void 0 ? void 0 : _a.text;
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

class MasOptionGroup {
    constructor() {
        this.inputClass = "mas-option-group ";
    }
}
MasOptionGroup.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasOptionGroup, deps: [], target: i0.ɵɵFactoryTarget.Directive });
MasOptionGroup.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: MasOptionGroup, selector: "mas-option-group", host: { properties: { "class": "this.inputClass" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MasOptionGroup, decorators: [{
            type: Directive,
            args: [{
                    // tslint:disable-next-line
                    selector: "mas-option-group"
                }]
        }], propDecorators: { inputClass: [{
                type: HostBinding,
                args: ["class"]
            }] } });

class MasSelectModule {
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

/*
 * Public API Surface of components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MasOption, MasOptionGroup, MasSelect, MasSelectModule, MasTextInput, MasTextInputModule };
//# sourceMappingURL=masoni-components.mjs.map
