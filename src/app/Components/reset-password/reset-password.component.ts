import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/UserService/user.service';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm!: FormGroup;
  submitted = false;
  token: any;

  constructor(private formBuilder: FormBuilder, private User: UserService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
   
    this.token = this.activateRoute.snapshot.paramMap.get('token')
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });

  }
  OnSubmit() {

    this.submitted = true;

    if (this.resetPasswordForm.valid) {
      let reqdata = {
        password: this.resetPasswordForm.value.password,
        conformPassword: this.resetPasswordForm.value.confirmPassword
      }
      console.log(this.token);
      console.log(reqdata);
      this.User.resetPassword(reqdata, this.token).subscribe((response: any) => {
        console.log(response)
      })



  
    }
  }
}

