import { Component, OnInit } from '@angular/core';
import { AlertService } from 'projects/components/src/lib/alert/alert.service';


@Component({
  selector: 'default-alert-sevice-example',
  template: `
   <button style="color: #0C0C0D; borderRadius: 8px;   border: 1px solid #D7D7DB; width: 100px;  padding: 8px 16px 8px 16px;
        cursor: pointer;  margin:10px" 
        (click)="showDefaultAlert()"> 
       Default 
   </button>

    
    <mas-alert> </mas-alert>
  `,
})
export class DefaultAlertServiceExample {
    constructor(private alertService: AlertService) { }

    showDefaultAlert(){
       this.alertService.showAlert({title:'Title for the default alert' }) ;
   }
}


@Component({
  selector: 'all-alert-sevice-example',
  template: `
    <button style="color: #0C0C0D; borderRadius: 8px;   border: 1px solid #D7D7DB; width: 100px;  padding: 8px 16px 8px 16px;
        cursor: pointer;  margin:10px" 
        (click)="showInfoAlert()"> 
       Info 
   </button>
   <br/>
    <button style="color: #0C0C0D; borderRadius: 8px;   border: 1px solid #D7D7DB; width: 100px;  padding: 8px 16px 8px 16px;
        cursor: pointer;  margin:10px" 
        (click)="showSuccessAlert()"> 
       Success 
   </button>
   <br/>
    <button style="color: #0C0C0D; borderRadius: 8px;   border: 1px solid #D7D7DB; width: 100px;  padding: 8px 16px 8px 16px;
        cursor: pointer;  margin:10px" 
        (click)="showErrorlert()"> 
       Error 
   </button>
   <br/>
    <button style="color: #0C0C0D; borderRadius: 8px;   border: 1px solid #D7D7DB; width: 100px;  padding: 8px 16px 8px 16px;
        cursor: pointer;  margin:10px" 
        (click)="showWarningAlert()"> 
       Warning 
   </button>
   

     
    <mas-alert> </mas-alert>
  `,
})
export class AllAlertServiceExample {
    constructor(private alertService: AlertService) { }

    showInfoAlert(){
    this.alertService.showAlert({description:'description for toast', title:'Info' , type:'info',closeBtn : true}) ;
     }
    showSuccessAlert(){
      this.alertService.showAlert({description:'description for toast', title:'Success' , type:'success',closeBtn : true}) ;
    }
    showErrorlert(){
      this.alertService.showAlert({description:'description for toast', title:'Error' , type:'error',closeBtn : true}) ;
    }
    showWarningAlert(){
      this.alertService.showAlert({description:'description for toast', title:'Warning' , type:'warning',closeBtn : true}) ;
    }
}

@Component({
  selector: 'info-alert-sevice-example',
  template: `
   <button style="color: #0C0C0D; borderRadius: 8px;   border: 1px solid #D7D7DB; width: 100px;  padding: 8px 16px 8px 16px;
        cursor: pointer;  margin:10px" 
        (click)="showInfoAlert()"> 
       Info 
   </button>

    
    <mas-alert> </mas-alert>
  `,
})
export class InfoAlertServiceExample {
    constructor(private alertService: AlertService) { }

    showInfoAlert(){
    this.alertService.showAlert({description:'description for toast', title:'Info' , type:'info',closeBtn : true}) ;
     }
}

@Component({
  selector: 'success-alert-sevice-example',
  template: `
    <button (click)="showSuccessAlert()"> show success alert </button> <br/>
    <mas-alert> </mas-alert>
  `,
})
export class SuccessAlertServiceExample {
    constructor(private alertService: AlertService) { }

    showSuccessAlert(){
      this.alertService.showAlert({description:'description for toast', title:'Success' , type:'success',closeBtn : true}) ;
    }
}

@Component({
  selector: 'error-alert-sevice-example',
  template: `
    <button (click)="showErrorlert()"> show error alert </button> <br/>
    <mas-alert> </mas-alert>
  `,
})
export class ErrorAlertServiceExample {
    constructor(private alertService: AlertService) { }

    showErrorlert(){
      this.alertService.showAlert({description:'description for toast', title:'Error' , type:'error',closeBtn : true}) ;
    }
}

@Component({
  selector: 'warning-alert-sevice-example',
  template: `
    <button (click)="showWarningAlert()"> show warning alert </button> <br/>
    <mas-alert> </mas-alert>
  `,
})
export class WarningAlertServiceExample {
    constructor(private alertService: AlertService) { }

    showWarningAlert(){
      this.alertService.showAlert({description:'description for toast', title:'Warning' , type:'warning',closeBtn : true}) ;
    }
}


@Component({
  selector: 'closeBtn-alert-sevice-example',
  template: `
   <button style="color: #0C0C0D; borderRadius: 8px;   border: 1px solid #D7D7DB; width: 200px;  padding: 8px 16px 8px 16px;
        cursor: pointer;  margin:10px" 
        (click)="show1()"> 
        with close button
   </button>
   <br/>
    <button style="color: #0C0C0D; borderRadius: 8px;   border: 1px solid #D7D7DB; width: 200px;  padding: 8px 16px 8px 16px;
        cursor: pointer;  margin:10px" 
        (click)="show2()"> 
        without close button
   </button>
   
    <mas-alert> </mas-alert>
  `,
})
export class AlertWithClosebtn {
    constructor(private alertService: AlertService) { }

    show1(){
    this.alertService.showAlert({description:'description for toast', title:'Info' , type:'info' , closeBtn : true}) ;
     }
     show2(){
      this.alertService.showAlert({description:'description for toast', title:'Info' , type:'info', closeBtn : false}) ;
       }
}

@Component({
  selector: 'desc-alert-sevice-example',
  template: `
   <button style="color: #0C0C0D; borderRadius: 8px;   border: 1px solid #D7D7DB; width: 200px;  padding: 8px 16px 8px 16px;
        cursor: pointer;  margin:10px" 
        (click)="show1()"> 
        with description
   </button>
   <br/>
    <button style="color: #0C0C0D; borderRadius: 8px;   border: 1px solid #D7D7DB; width: 200px;  padding: 8px 16px 8px 16px;
        cursor: pointer;  margin:10px" 
        (click)="show2()"> 
        without description
   </button>
   
    <mas-alert> </mas-alert>
  `,
})
export class AlertWithDescrition {
    constructor(private alertService: AlertService) { }

    show1(){
    this.alertService.showAlert({description:'description for toast', title:'Info' , type:'info',closeBtn : true}) ;
     }
     show2(){
      this.alertService.showAlert({title:'Info' , type:'info',closeBtn : true}) ;
       }
}
