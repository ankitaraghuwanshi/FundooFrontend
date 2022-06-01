import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../HttpService/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
 token:any;
  constructor(private httpService: HttpserviceService) { 
    this.token = localStorage.getItem('token')
  }

  createnote(reqdata: any) {
    console.log(reqdata);
    console.log(this.token) 

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
         'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.postServive('Note', reqdata, true, header)
  }
  // getallnote(reqdata: any) {
  //   console.log(reqdata);
  //   console.log(this.token) 

  //   let header = {
  //     headers: new HttpHeaders({
  //       'content-type': 'application/json',
  //        'Authorization':this.token
  //     })
  //   }
  //   return this.httpService.getServive('Note', reqdata, true, header)

}
