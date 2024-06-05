import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Registration',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
];
