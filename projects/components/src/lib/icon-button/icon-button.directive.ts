// mas-button.directive.ts
import { Directive, ElementRef, Input, Renderer2, OnChanges, SimpleChanges, HostBinding } from '@angular/core';

@Directive({
  selector: '[MasIconButton]', 
})
export class MasIconButtonDirective implements OnChanges{
  @Input() variant: 'primary' | 'secondary' | ' tertiary' | ' accent' = 'primary';
  @Input() size: 'small' | 'medium' = 'medium';
  @Input() disabled: boolean = false;
  @Input() iconAlone: string | null = null;

  @HostBinding('class.mas-icon-button') vtmnBtnClass = true;
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
      'mas-icon-button': true,
      [`mas-icon-button_variant--${this.variant}`]: true,
      [`mas-icon-button_size--${this.size}`]: true,
      'mas-icon-button--icon-alone': !this.isEmpty(this.iconAlone)
    }; 
    
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-link_size--medium');
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-link_size--small'); 
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-icon-button_variant--primary'); 
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-icon-button_variant--secondary'); 
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-icon-button_variant--tertiary'); 
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-icon-button_variant--accent'); 

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
