import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm !: FormGroup;
  submitted = false;
  public showPassword: boolean = false;

  constructor(private formBuilder: FormBuilder, private User: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]

    });

  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  onsubmit() {
    this.submitted = true;
    console.log("api call")
    if (this.registerForm.valid) {

      let reqdata = {
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,

      }
      this.User.registration(reqdata).subscribe((response: any) => {
        console.log(response);
      })
    }

  }
}

