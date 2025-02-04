// mas-link.directive.ts
import { Directive, ElementRef, Input, Renderer2, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[masLink]',
})
export class MasLinkDirective  implements OnChanges {
  /**
   * The size of the link. Available options: 'small', 'medium', 'large'. Default: 'medium'.
   */
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  /**
   * Label for link.
   */
  @Input() label: string = '';
  /**
   * Link's icon.
   */
  @Input() icon: string = '';
  /**
   * The URL the link should navigate to. Default: '#'.
   */
  @Input() href: string = '#';
  /**
   * Whether the link is disabled
   */
  @Input() disabled: boolean = false;

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
      'mas-link--disabled': this.disabled,
    }; 
    
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-link_size--medium');
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-link_size--x-small');
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-link_size--small');
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-link_size--large');
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-link--disabled');
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
