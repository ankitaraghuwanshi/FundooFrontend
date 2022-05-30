import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../HttpService/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpserviceService) { }

  registration(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json'

      })
    }
    return this.httpService.postServive('User/register', reqdata, false, header)
  }
  login(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      })
    }
    return this.httpService.postServive(`User/login/${reqdata.email}/${reqdata.password}`, reqdata, false, header)

  }
  forgotPassword(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      })
    }
    return this.httpService.postServive(`User/ForgotPassword/${reqdata.Email}`, reqdata, false, header)
  }
  resetPassword(reqdata: any, token: any) {
    console.log(reqdata)

    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + token
      })

    }
    return this.httpService.putServive('User/ChangePassword', reqdata, true, header)
  }


}
