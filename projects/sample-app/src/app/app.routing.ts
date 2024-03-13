import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { NgModule } from '@angular/core';
import { DefaultLayoutComponent } from './containers/default-layout.component';

export const routes: Routes = [
  {
    path: '**',
    redirectTo: 'login',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        title: 'login',
      },
    ],
  },
];
