import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sample-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  email: any;
  onChange(event: Event){
    console.log(event);
  }
  ngOnInit() {}
}
