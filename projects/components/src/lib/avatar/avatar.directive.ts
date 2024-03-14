import { Directive, ElementRef, Input, Renderer2, OnChanges, SimpleChanges, HostBinding } from '@angular/core';

@Directive({
  selector: '[masAvatar]'
})
export class MasAvatarDirective implements OnChanges {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() type: 'Avatar' | 'Icon' | 'Initial' = 'Avatar';
  @Input() strokeAlignment: 'Inside' | 'Outside' = 'Inside';
  @Input() borderRadius: number = 0;
  @Input() backgroundColor: string = '#C74D10';
  @Input() borderColor: string = '#EDEDF0';
  @Input() borderWeight: number = 1;
  @Input() initial: string = '';

  @HostBinding('class.avatar') avatarClass = true;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.applyStyles();
  }

  private applyStyles(): void {
    const element = this.elementRef.nativeElement as HTMLElement;
    element.style.borderRadius = `${this.borderRadius}px`;
    element.style.backgroundColor = this.backgroundColor;
    element.style.borderColor = this.borderColor;
    element.style.borderWidth = `${this.borderWeight}px`;

    const classes: { [key: string]: boolean } = {
      [`avatar-${this.size}`]: true,
      [`avatar-${this.type.toLowerCase()}`]: true,
      [`avatar-stroke-${this.strokeAlignment.toLowerCase()}`]: true,
    };

    for (const className in classes) {
      if (classes[className]) {
        this.renderer.addClass(element, className);
      } else {
        this.renderer.removeClass(element, className);
      }
    }
  }
}