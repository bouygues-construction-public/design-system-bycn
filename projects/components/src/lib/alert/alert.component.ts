import { Component, Input } from '@angular/core';
import { AlertService } from './alert.service';


@Component({
  selector: 'mas-alert',
  templateUrl: './alert.component.html',
})
export class MasAlert {

  constructor(private alertService: AlertService) { }


  title: string | undefined = '';
  message: string | undefined = '';
  show: boolean = false;
  type: string | undefined = 'info';
  closeBtn: boolean | undefined = true;

  alertShow: boolean = false;
  timeoutId1: any
  timeoutId2: any

  ngOnInit() {
    this.show = false;
    this.alertShow = false;
    this.alertService.clearAlert();
    this.alertService.getAlertObservable().subscribe((alertBody) => {
      this.show = false;
      this.alertShow = false;

      if (alertBody) {
        console.log(alertBody)
        this.message = alertBody.description;
        this.title = alertBody.title
        this.type = alertBody.type?alertBody.type:"info";
        this.closeBtn = alertBody.closeBtn!==undefined?alertBody.closeBtn : true
        setTimeout(() => {
          this.show = true
          this.alertShow = true;
          if (this.timeoutId1 || this.timeoutId2) {
            clearTimeout(this.timeoutId1);
            clearTimeout(this.timeoutId2);
          }
          this.timeoutId1 = setTimeout(() => {
            this.closeAlert()
          }, 10000);

        }, 5);
      }

    });
  }
  closeAlert() {
    this.alertShow = false;
    this.timeoutId2 = setTimeout(() => {
      this.show = false;
      this.alertService.clearAlert();
    }, 300);
  }
}
