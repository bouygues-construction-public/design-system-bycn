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
   * The name of the icon to display as the sole content of the button.
   */
  @Input() iconAlone: string | null = null;

  @HostBinding('class.mas-btn') vtmnBtnClass = true;
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
      'mas-btn': true,
      [`mas-btn_variant--${this.variant}`]: true,
      [`mas-btn_size--${this.size}`]: true,
      'mas-btn--icon-left' : !this.isEmpty(this.iconLeft),
      'mas-btn--icon-right': !this.isEmpty(this.iconRight),
      'mas-btn--icon-alone': !this.isEmpty(this.iconAlone)
    }; 
    
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-link_size--medium');
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-link_size--small'); 
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-btn_variant--primary'); 
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-btn_variant--secondary'); 
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-btn_variant--tertiary'); 
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-btn_variant--accent'); 

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
