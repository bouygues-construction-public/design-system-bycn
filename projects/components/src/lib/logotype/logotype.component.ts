import { Component, Input } from '@angular/core';

@Component({
  selector: 'mas-logotype',
  templateUrl: './logotype.component.html', 
  styleUrls: ['./logotype.component.scss'] 
})
export class MasLogotype {
  @Input() variant: string;
  @Input() width: string = '100%';
  @Input() height: string = '100%';





}
