import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardnameGuard } from './authguardname.guard';
import { ArchiveComponent } from './Components/archive/archive.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { LabelComponent } from './Components/label/label.component';

import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { TrashnoteComponent } from './Components/trashnote/trashnote.component';




const routes: Routes = [
  {path:'' ,redirectTo:"/login" ,pathMatch:'full'},
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'reset-password/:token', component: ResetPasswordComponent },
  {path:'' ,redirectTo:"/login" ,pathMatch:'full'},
  
  {path: 'dashboard', component: DashboardComponent,canActivate:[AuthguardnameGuard],
    children: [
      {path:'', redirectTo:"/dashboard/notes", pathMatch:'full' },
      { path: 'notes', component: GetAllNotesComponent },
      { path: 'trashnote', component: TrashnoteComponent},
      { path: 'archive', component: ArchiveComponent},
      {path: 'label', component:LabelComponent}
    ]
  },
 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
