import { ElementRef, EventEmitter } from '@angular/core';
import '@masoni/icons/dist/css/mas-icons.css';
import * as i0 from "@angular/core";
export declare class MasOption {
    private _selected;
    value: any;
    disabled: boolean;
    size: 'S' | 'M';
    onChange: EventEmitter<any>;
    onClick: EventEmitter<MouseEvent>;
    _text: ElementRef<HTMLElement> | undefined;
    get text(): any;
    get selected(): boolean;
    onOptionClick(event: Event): void;
    select(): void;
    deselect(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MasOption, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MasOption, "mas-option", never, { "value": "value"; "disabled": "disabled"; "size": "size"; }, { "onChange": "onChange"; "onClick": "onClick"; }, never, ["*"], false, never>;
}
