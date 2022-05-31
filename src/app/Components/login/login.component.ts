import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
 token:any;
  constructor(private formBuilder: FormBuilder, private User: UserService) {
    this.token = localStorage.getItem("token")
   }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
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
        localStorage.setItem("token",response.data);
      })
    }


  }
}

