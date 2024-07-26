// mas-link.directive.ts
import { Directive, ElementRef, Input, Renderer2, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[masLink]',
})
export class MasLinkDirective  implements OnChanges {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() standalone: boolean = false;
  @Input() iconAlong: boolean = false;
  @Input() href: string = '#';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  //  this.applyLinkStyles();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Check if any of the input properties have changed
     
      this.applyLinkStyles(); 
  }

  private applyLinkStyles() {
    const classes: { [key: string]: boolean } = {
      'mas-link': true,
      [`mas-link_size--${this.size}`]: true,
      'mas-link--standalone': this.standalone,
      'mas-link--icon-along': this.iconAlong,
    }; 
    
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-link_size--medium');
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-link_size--small');
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-link_size--large');
    for (const className in classes) {
      if (classes[className]) {
        this.renderer.addClass(this.elementRef.nativeElement, className);
      }else{ 
        this.renderer.removeClass(this.elementRef.nativeElement, className);
      }
    }

    this.renderer.setAttribute(this.elementRef.nativeElement, 'href', this.href);
  } 
}
