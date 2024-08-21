import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastService } from './toast.service';

@Component({
  selector: 'mas-toast',
  templateUrl: './toast.component.html'
})
export class MasToast {
  constructor(private toastService: ToastService) { }

  toastShow: boolean = false;
  timeoutId1: any
  timeoutId2: any
  show  = false ;
  description: string | null = 'Description for the toast ';
  closeBtn: boolean | null = true;
  actionBtn: boolean | null = false;
  buttonLabel: string | null = 'Button 1'
  actionButtonClickCallback: Function

  @Output() actionButton = new EventEmitter<void>();

  action(){
    this.actionButtonClickCallback()
  }

  ngOnInit() {
    this.show = false;
    this.toastShow = false;
    this.toastService.clearToast();
    this.toastService.getToastObservable().subscribe((toastBody) => {
      this.show = false;
      this.toastShow = false;

      if (toastBody) {

        this.description = toastBody.description;
        this.actionBtn = toastBody.actionButton
        if(this.actionBtn){
          this.actionButtonClickCallback = toastBody.actionButton.action.bind(this)
          this.buttonLabel =  toastBody.actionButton.label
        }
        this.closeBtn = toastBody.closeBtn!==undefined?toastBody.closeBtn : true
        setTimeout(() => {
          this.show = true
          this.toastShow = true;
          if (this.timeoutId1 || this.timeoutId2) {
            clearTimeout(this.timeoutId1);
            clearTimeout(this.timeoutId2);
          }
          this.timeoutId1 = setTimeout(() => {
            this.closeToast()
          }, 10000);

        }, 5);
      }

    });
  }
  closeToast() {
    this.toastShow = false;
    this.timeoutId2 = setTimeout(() => {
      this.show = false;
      this.toastService.clearToast();
    }, 300);
  }
}
