// mas-button.directive.ts
import { Directive, ElementRef, Input, Renderer2, OnChanges, SimpleChanges, HostBinding } from '@angular/core';

@Directive({
  selector: '[MasIconButton]',
})
export class MasIconButtonDirective implements OnChanges {
  /**
   * Whether the button should be disabled. Default: false.
   */
  @Input() variant: 'primary' | 'secondary' | ' tertiary' = 'primary';
  /**
   * The size of the button. Available options: 'small', 'medium', 'large'. Default: 'medium'.
   */
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  /**
   * Whether the button should be disabled. Default: false.
   */
  @Input() disabled: boolean = false;
  /**
   * Button shape, Default: 'square'
   */
  @Input() shape: 'square' | 'rounded' = 'square';
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
      [`mas-button_shape--${this.shape}`]: true,
      'mas-icon-button--icon-alone': !this.isEmpty(this.iconAlone),
    };

    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-link_size--large');
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-link_size--medium');
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-link_size--small');
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-icon-button_variant--primary');
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-icon-button_variant--secondary');
    this.renderer.removeClass(this.elementRef.nativeElement, 'mas-icon-button_variant--tertiary');

    for (const className in classes) {
      if (classes[className]) {
        this.renderer.addClass(this.elementRef.nativeElement, className);
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, className);
      }
    }
  }

  isEmpty(str: string | null) {
    return !str || str.length == 0;
  }
}
