import { Component, Input } from '@angular/core';

@Component({
  selector: 'mas-inline-loading',
  templateUrl: './inline-loading.component.html',
  host: {
    class: 'mas-inline-loading',
    '[class.mas-inline-loading_state--active]': 'state === "active"',
    '[class.mas-inline-loading_state--success]': 'state === "success"',
    '[class.mas-inline-loading_state--error]': 'state === "error"',
  }
})
export class MasInlineLoading {
  @Input() activeText: string | null = null;
  @Input() errorText: string | null = null;
  @Input() successText: string | null = null;
  @Input() state: 'active' | 'success' | 'error' = 'active';
}
