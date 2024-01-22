import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private toastSubject = new Subject<any | null>();
  alertState = this.toastSubject.asObservable();

  showToast(message: ToastBody) {
    this.clearToast();
    this.toastSubject.next(message);  
  }

  getToastObservable() {
    return this.toastSubject.asObservable();
  }

  clearToast() {
    this.toastSubject.next(null); // Use null to clear the toast
  }
  
}

export interface ToastBody {
  description?: string;
  actionButton? : ActionButton
  closeBtn?: boolean;
}
export interface ActionButton {
  label: string;
  action: any;
}
