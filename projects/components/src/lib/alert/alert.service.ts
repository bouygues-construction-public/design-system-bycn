import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertSubject = new Subject<AlertBody | null>();
  alertState = this.alertSubject.asObservable();

  showAlert(message: AlertBody) {
    this.clearAlert();
    this.alertSubject.next(message);
  }

  getAlertObservable() {
    return this.alertSubject.asObservable();
  }

  clearAlert() {
    this.alertSubject.next(null); // Use null to clear the toast
  }
}


export interface AlertBody {
    title: string;
    description?: string;
    type?: string;
    closeBtn?: boolean;
  }