import { Component, OnInit, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasToggleButtonModule } from 'projects/components/src/lib/togglebutton/toggle-button.module';
import '@masoni/css-toggle-button/dist/index.css';
@Component({
  selector: 'app-toggle-group',
  template: `
    <div *ngFor="let arg of args" style="margin-top: 10px;">
      <mas-toggle-button [identifier]="arg.identifier" [name]="arg.name" [size]="arg.size" [disabled]="arg.disabled">
      </mas-toggle-button>
    </div>
  `,
})
export class ToggleGroupComponent {
  @Input() args: any[] = [];
}

@NgModule({
  imports: [MasToggleButtonModule, CommonModule],
  exports: [ToggleGroupComponent],
  declarations: [ToggleGroupComponent],
})
export class ToggleGroupModule {}
