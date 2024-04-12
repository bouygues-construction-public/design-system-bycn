import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'mas-modal',
  templateUrl: './modal.component.html',
})
export class MasModal{
  
  @Input() text: string ;
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
  constructor() { }

  public openModal() {
    this.showModal = true;
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
  





}


