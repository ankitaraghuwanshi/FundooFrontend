import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardnameGuard } from './authguardname.guard';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';

import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';




const routes: Routes = [
  {path:'' ,redirectTo:"/login" ,pathMatch:'full'},
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'reset-password/:token', component: ResetPasswordComponent },

  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'notes', component: GetAllNotesComponent }

    ]
  },
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthguardnameGuard]}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
