// mas-button.directive.ts
import { Directive, ElementRef, Input, Renderer2, OnChanges, SimpleChanges, HostBinding } from '@angular/core';

@Directive({
  selector: '[MasButton]', 
})
export class MasButtonDirective implements OnChanges{
  /**
   * The variant of the button including 'primary' | 'secondary' | 'tertiary' | 'accent'.
   */
  @Input() variant: 'primary' | 'secondary' | 'tertiary' | 'accent' = 'primary';
  /**
   * The size of the button. Available options: 'small', 'medium'. Default: 'medium'.
   */
  @Input() size: 'small' | 'medium' = 'medium';
  /**
   * Whether the button should be disabled. Default: false.
   */
  @Input() disabled: boolean = false;
  /**
   * The name of the icon to display on the left side of the button. 
   */
  @Input() iconLeft: string | null = null;
  /**
   * The name of the icon to display on the right side of the button.
   */
  @Input() iconRight: string | null = null;
  /**
   * Button shape, Default: 'square'
   */
  @Input() shape: 'square' | 'rounded' = 'square'

  @HostBinding('class.mas-button') masoniButtonClass = true;
  @HostBinding('attr.disabled') get isDisabled() {
    return this.disabled ? 'true' : null;
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    // Check if any of the input properties have changed
     
      this.applyLinkStyles(); 
  }

  private applyLinkStyles() {
    const classes: { [key: string]: boolean } = {
      'mas-button': true,
      [`mas-button_variant--${this.variant}`]: true,
      [`mas-button_size--${this.size}`]: true,
      [`mas-button_shape--${this.shape}`]: true,
      'mas-button--icon-left' : !this.isEmpty(this.iconLeft),
      'mas-button--icon-right': !this.isEmpty(this.iconRight),
    }; 
    
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-link_size--medium');
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-link_size--small'); 
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-button_variant--primary'); 
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-button_variant--secondary'); 
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-button_variant--tertiary'); 

    for (const className in classes) {
      if (classes[className]) {
        this.renderer.addClass(this.elementRef.nativeElement, className);
      }else{ 
        this.renderer.removeClass(this.elementRef.nativeElement, className);
      }
    } 
  } 

  isEmpty(str: string | null) {
    return !str || str.length==0;
  }
}
