import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './Components/registration/registration.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';

import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';


import {MatNativeDateModule} from '@angular/material/core';
import { CreateNoteComponent } from './Components/create-note/create-note.component';
import { DisplaynoteComponent } from './Components/displaynote/displaynote.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { IconsComponent } from './Components/icons/icons.component';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';

import { AuthguardserviceService } from './services/Authguard/authguardservice.service';
import { UpdateComponent } from './Components/update/update.component';

import {MatDialogModule} from '@angular/material/dialog';
import { TrashnoteComponent } from './Components/trashnote/trashnote.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    CreateNoteComponent,
    DisplaynoteComponent,
    GetAllNotesComponent,
    IconsComponent,
    UpdateComponent,
    TrashnoteComponent,
    ArchiveComponent,
    FilterPipe,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,FlexLayoutModule,MatCheckboxModule, MatButtonModule,MatMenuModule,
   FormsModule,ReactiveFormsModule,
   HttpClientModule,
   MatSidenavModule,MatToolbarModule,MatIconModule ,MatListModule,MatNativeDateModule,MatCardModule,
   MatDialogModule, MatSnackBarModule
    
  ],
  providers: [
    AuthguardserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
