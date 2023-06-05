import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textstyle',
  template: `
    <div class="block" *ngFor="let line of text">
      <p class="{{ line.class }}">{{ line.data }}</p>
    </div>
  `,
})
export default class textstyle {
  @Input() text: any[] = [];
}
