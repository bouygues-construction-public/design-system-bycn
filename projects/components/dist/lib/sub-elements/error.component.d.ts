import { TemplateRef } from '@angular/core';
import '@masoni/css-sub-elements/dist/index.css';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export declare class MasError {
    errorMessage: any | TemplateRef<any>;
    isTemplate(value: any): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<MasError, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MasError, "mas-error", never, { "errorMessage": "errorMessage"; }, {}, never, ["*"], false, never>;
}
export declare class MasErrorModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MasErrorModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MasErrorModule, [typeof MasError], [typeof i1.CommonModule, typeof i2.FormsModule], [typeof MasError]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MasErrorModule>;
}
