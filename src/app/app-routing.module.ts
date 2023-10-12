import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'signup',
    component: SignupComponent,
  },
  {
    path:'forget-password',
    component: ForgetPasswordComponent,
  },
  {
    path:'home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
