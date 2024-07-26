import { Component, OnInit } from '@angular/core';
import { ActionButton, ToastService } from 'projects/components/src/lib/toast/toast.service';

@Component({
  selector: 'default-toast-sevice-example',
  template: `
  <button  style="color: #0C0C0D; borderRadius: 8px;   border: 1px solid #D7D7DB; width: 120px;  padding: 8px 16px 8px 16px;
  cursor: pointer;  margin:10px" 
   (click)="showCustomToast()">
   Show Toast
   
   </button> 
    <mas-toast> </mas-toast>
  `,
})
export class DefaultToastServiceExample {
    constructor(private toastService: ToastService) { }

    actionButton  = { label: 'Action', action: this.myFunction }

    showCustomToast(){
    this.toastService.showToast({description:'Description for toast',closeBtn : true , actionButton : this.actionButton}) ;
  
     }
        
     myFunction() : any{
      alert("Yes!")
     }
}


@Component({
  selector: 'action-button-toast-sevice-example',
  template: `
  <button  style="color: #0C0C0D; borderRadius: 8px;   border: 1px solid #D7D7DB; width: 300px;  padding: 8px 16px 8px 16px;
  cursor: pointer;  margin:10px" 
   (click)="showCustomToast()">
   Show Toast With Action Button 
   </button> 
   <br/>
   <button  style="color: #0C0C0D; borderRadius: 8px;   border: 1px solid #D7D7DB; width: 300px;  padding: 8px 16px 8px 16px;
   cursor: pointer;  margin:10px" 
    (click)="showCustomToast2()">
    Show Toast Without Action Button 
    </button>

    <mas-toast> </mas-toast>
  `,
})
export class ActionButtonToastServiceExample {
    constructor(private toastService: ToastService) { }

    actionButton  = { label: 'Action', action: this.myFunction }

    showCustomToast(){
      this.toastService.showToast({description:'Description for toast',closeBtn : false , actionButton : this.actionButton}) ; 
     }
    showCustomToast2(){
      this.toastService.showToast({description:'Description for toast',closeBtn : false }) ; 
    }
        
    myFunction() : any{
      alert("Yes!")
    }
}

@Component({
  selector: 'close-button-toast-sevice-example',
  template: `
  <button  style="color: #0C0C0D; borderRadius: 8px;   border: 1px solid #D7D7DB; width: 300px;  padding: 8px 16px 8px 16px;
  cursor: pointer;  margin:10px" 
   (click)="showCustomToast()">
   Show Toast Without Close Button 
   </button> 
   <br/>
   <button  style="color: #0C0C0D; borderRadius: 8px;   border: 1px solid #D7D7DB; width: 300px;  padding: 8px 16px 8px 16px;
   cursor: pointer;  margin:10px" 
    (click)="showCustomToast2()">
    Show Toast Without Close Button 
    </button>
    
    <mas-toast> </mas-toast>
  `,
})
export class CloseButtonToastServiceExample {
    constructor(private toastService: ToastService) { }

    actionButton  = { label: 'Action', action: this.myFunction }

    showCustomToast(){
      this.toastService.showToast({description:'Description for toast',closeBtn : true }) ; 
     }
    showCustomToast2(){
      this.toastService.showToast({description:'Description for toast',closeBtn : false }) ; 
    }
        
    myFunction() : any{
      alert("Yes!")
    }
}
