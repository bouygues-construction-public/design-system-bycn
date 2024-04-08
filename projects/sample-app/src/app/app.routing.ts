import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { DefaultLayoutComponent } from './containers/default-layout.component';
import { FormComponent } from './views/form/form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        title: 'Login example',
      },
      {
        path: 'form',
        component: FormComponent,
        title: 'Form example',
      },
    ],
  },
];
