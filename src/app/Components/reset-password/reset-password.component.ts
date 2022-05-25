import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.email]],
      Confirmpassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  OnSubmit(){
    console.log("inside submit");
    if(this.resetPasswordForm.valid)
    {
      console.log("valid Data", this.resetPasswordForm.value);
      let data ={
        email: this.resetPasswordForm.value.email,       
        password: this.resetPasswordForm.value.password,
      }
    }
    else
    {
      console.log("invalid data", this.resetPasswordForm.value)
    }
  
  }
  }


