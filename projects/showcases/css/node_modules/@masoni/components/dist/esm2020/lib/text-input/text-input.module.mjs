import { NgModule } from '@angular/core';
import { MasTextInput } from './text-input.component';
import { CommonModule } from '@angular/common';
import { MasErrorModule, MasLabelModule, MasHelperModule } from '../sub-elements';
import { ReactiveFormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
export class MasTextInputModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1pbnB1dC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3RleHQtaW5wdXQvdGV4dC1pbnB1dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxjQUFjLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBQyxNQUFNLGlCQUFpQixDQUFBO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQVFyRCxNQUFNLE9BQU8sa0JBQWtCOzsrR0FBbEIsa0JBQWtCO2dIQUFsQixrQkFBa0IsaUJBSmQsWUFBWSxhQURqQixZQUFZLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLGFBRWxGLFlBQVk7Z0hBR1gsa0JBQWtCLFlBTG5CLFlBQVksRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxtQkFBbUI7MkZBS2pGLGtCQUFrQjtrQkFOOUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLENBQUM7b0JBQzdGLFlBQVksRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDNUIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixTQUFTLEVBQUUsRUFBRTtpQkFDZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNYXNUZXh0SW5wdXQgfSBmcm9tICcuL3RleHQtaW5wdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtNYXNFcnJvck1vZHVsZSwgTWFzTGFiZWxNb2R1bGUsIE1hc0hlbHBlck1vZHVsZX0gZnJvbSAnLi4vc3ViLWVsZW1lbnRzJ1xyXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBNYXNFcnJvck1vZHVsZSwgTWFzTGFiZWxNb2R1bGUsIE1hc0hlbHBlck1vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTWFzVGV4dElucHV0XSxcclxuICBleHBvcnRzOiBbTWFzVGV4dElucHV0XSxcclxuICBwcm92aWRlcnM6IFtdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFzVGV4dElucHV0TW9kdWxlIHt9XHJcbiJdfQ==