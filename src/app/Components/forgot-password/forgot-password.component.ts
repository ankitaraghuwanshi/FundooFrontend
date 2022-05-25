import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
     
    });
  }
  onSubmit(){
    console.log(this.forgotPasswordForm.value);
  }
  // OnSubmit(){
  //   console.log("inside submit");
  //   if(this.forgotPasswordForm.valid)
  //   {
  //     console.log("valid Data", this.forgotPasswordForm.value);
  //     let data ={
  //       email: this.forgotPasswordForm.value.email,       
  //       password: this.forgotPasswordForm.value.password,
  //     }
  //   }
  //   else
  //   {
  //     console.log("invalid data", this.forgotPasswordForm.value)
  //   }
  
  // }
}

