import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
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
  {
    path: '**',
    component: HomeComponent,
    redirectTo: '',
  },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full',
  },
];
