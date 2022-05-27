import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../HttpService/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService :HttpserviceService) { }

  registration(reqdata:any){
    console.log(reqdata);

    let header = {
      headers :new HttpHeaders({
        'content-type': 'application/json',
        
      })
    }
     return this.httpService.postServive('User/register',reqdata,false,header)
  }
}
