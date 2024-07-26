import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener, Renderer2} from '@angular/core';

@Component({
  selector: 'mas-modal',
  templateUrl: './modal.component.html',
})
export class MasModal{
  
  @ViewChild('firstFocusable') firstFocusable!: ElementRef;
  @ViewChild('lastFocusable') lastFocusable!: ElementRef;
  @ViewChild('modalContainer') modalContainer!: ElementRef;
  @Input() showModal: boolean = false;
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() buttonLabelprimary: string = '';
  @Input() buttonLabelsecondary: string = '';
  @Input() buttonOptions: string = 'Show_Buttons';
  @Input() size: string = '';
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  @Output() confirm: EventEmitter<void> = new EventEmitter<void>();
  @Output() showModalChange: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    if (this.showModal) {
      this.firstFocusable.nativeElement.focus();
    }
  }

  public openModal() {
    this.showModal = true;
    setTimeout(() => {
      this.firstFocusable.nativeElement.focus();
    }, 0);
  }

  closeModal(): void {
    this.showModal = false;
    this.cancel.emit();
    this.showModalChange.emit(this.showModal);
  }

  confirmAction(): void {
    this.showModal = false;
    this.confirm.emit();
  }

  cancelAction(): void {
    this.showModal = false;
    this.cancel.emit();
  }

  handleKeydown(event: KeyboardEvent, action: string): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (action === 'close') {
        this.closeModal();
      } else if (action === 'confirm') {
        this.confirmAction();
      } else if (action === 'cancel') {
        this.cancelAction();
      }
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleTabKey(event: KeyboardEvent): void {
    if (event.key === 'Tab' && this.showModal) {
      const focusableElements = this.getFocusableElements();
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }

  private getFocusableElements(): HTMLElement[] {
    const modal = document.querySelector('.modal');
    return Array.from(modal?.querySelectorAll('button, input, select, textarea, [tabindex]:not([tabindex="-1"])') || []);
  }

}


