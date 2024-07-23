import { Component, Input } from '@angular/core';

@Component({
  selector: 'mas-divider',
  host: {
    class: 'mas-divider'
  },
  template: `<div class="{{ orientation }}"></div>`,
})
export class MasDivider {
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  constructor() {}
}
