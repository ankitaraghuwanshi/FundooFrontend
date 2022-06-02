import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../HttpService/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   token:any;
  constructor(private httpService: HttpserviceService) { 
    this.token=localStorage.getItem("token"); 
  }

  registration(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json'

      })
    }
    return this.httpService.postService('User/register', reqdata, false, header)
  }
  login(reqdata: any) {
    console.log(reqdata);

    let headeroption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      })
    }
    return this.httpService.postService(`User/login/${reqdata.email}/${reqdata.password}`, reqdata, false, headeroption)

  }
  forgotPassword(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization':'token'
      })
    }
    return this.httpService.postService(`User/ForgotPassword/${reqdata.Email}`, reqdata, true, header)
  }
  resetPassword(reqdata: any, token: any) {
    console.log(reqdata)

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })

    }
    return this.httpService.putService('User/ChangePassword', reqdata, true, header)
  }


}
