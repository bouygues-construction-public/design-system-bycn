import { TemplateRef } from '@angular/core';
import '@masoni/css-sub-elements/dist/index.css';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export declare class MasHelper {
    helperText: any | TemplateRef<any>;
    isTemplate(value: any): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<MasHelper, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MasHelper, "mas-helper", never, { "helperText": "helperText"; }, {}, never, ["*"], false, never>;
}
export declare class MasHelperModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MasHelperModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MasHelperModule, [typeof MasHelper], [typeof i1.CommonModule, typeof i2.FormsModule], [typeof MasHelper]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MasHelperModule>;
}
