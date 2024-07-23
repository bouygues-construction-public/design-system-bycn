import { Component, Input } from '@angular/core';

@Component({
  selector: 'mas-divider',
  template: `<div class="mas-divider {{ orientation }}"></div>`,
})
export class MasDivider {
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  constructor() {}
}
