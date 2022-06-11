import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from './HttpService/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class LabelserviceService {
token:any
  constructor(private httpservice:HttpserviceService) {
    this.token=localStorage.getItem("token")
 }

 
  createLabel(reqdata: any) {
    console.log(reqdata);
   

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization':'Bearer ' + this.token
      })
    }
    return this.httpservice.postService('Label/CreateLabel', reqdata, true, header)
  }

  getAllLable(userId :any) {

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization':'Bearer ' + this.token
      })
    }
    return this.httpservice.getService(`Label/GetLabelByuserId/${userId }`, true, header)
  }

}
