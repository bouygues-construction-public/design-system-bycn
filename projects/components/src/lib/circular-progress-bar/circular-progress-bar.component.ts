import { Component, Input } from '@angular/core';

@Component({
  selector: 'circular-progress-bar',
  templateUrl: './circular-progress-bar.component.html',
})
export class CircularProgressBar  {

  @Input() loadingText: string | null= null;
  @Input() errorText: string | null= null;
  @Input() successText: string | null= null;
  @Input() state: 'loading' | 'success' | 'error' = 'loading';

}
