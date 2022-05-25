import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';

import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';

const routes: Routes = [
  {path: 'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
 {path:'forgotPassword',component:ForgotPasswordComponent},
  {path: 'resetPassword',component:ResetPasswordComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
