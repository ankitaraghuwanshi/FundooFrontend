import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  token: any;
  Users:any
  constructor(private formBuilder: FormBuilder, private User: UserService, private router:Router,private snackbar:MatSnackBar) {
    this.token = localStorage.getItem("token")
  }

  ngOnInit(): void {
    
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      
    });
    localStorage.setItem('SeesionUser',this.Users)  
  }
  OnSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      let reqdata = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      }
      this.User.login(reqdata).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem("token", response.data);
      })
    }
    this.router.navigateByUrl('/dashboard')
    this.snackbar.open('login Successfully..!!!','..', {
      duration: 3000,
    })

  }
}

