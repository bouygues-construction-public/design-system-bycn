import { Component, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'mas-footer',
  templateUrl: './footer.component.html',
})
export class MasFooter{
 
  @Input() Logotype: boolean = true;
  @Input() SocialMedia: boolean = true;
  @Input() size: string = '';
  @Input() MiddleFooter: boolean = true;
  @Input() variant: string = '';
  @Input() blockTitles: string[] = [];
  @Input() blockLinks: [string, string][][] = []; 
  @Input() personalDataTitle: string[] = [];
  @Input() personalDataUrl: string[] = [];
  @Input() socialNetworkTitle: string = 'Our social networks';
  @Input() socialMediaIcons: string[] = [];
  @Input() socialMediaLinks: string[] = [];
  @Input() NumberOfBloc: number = 3;
  ngOnChanges(changes: SimpleChanges): void {
    // Vérifie si le nombre de blocs dépasse 3 et le tronque si nécessaire
    if (this.blockTitles.length > 3) {
      this.blockTitles = this.blockTitles.slice(0, 3);
    }
    if (this.blockLinks.length > 3) {
      this.blockLinks = this.blockLinks.slice(0, 3);
    }
  }
  constructor() { }
  getBlockIndices(): number[] {
    return Array.from({ length: this.NumberOfBloc }, (_, i) => i);
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.keyCode === 13 || event.keyCode === 32) { // 13: Enter, 32: Space
      (event.target as HTMLElement).click();
    }
  }


}


