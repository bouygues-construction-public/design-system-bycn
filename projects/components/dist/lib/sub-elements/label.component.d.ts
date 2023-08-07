import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export declare class MasLabel implements OnInit {
    get identifier(): string;
    set identifier(value: string);
    private _identifier;
    optional: boolean;
    infoIcon: boolean;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MasLabel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MasLabel, "mas-label", never, { "identifier": "identifier"; "optional": "optional"; "infoIcon": "infoIcon"; }, {}, never, ["*"], false, never>;
}
export declare class MasLabelModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MasLabelModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MasLabelModule, [typeof MasLabel], [typeof i1.CommonModule, typeof i2.FormsModule], [typeof MasLabel]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MasLabelModule>;
}
