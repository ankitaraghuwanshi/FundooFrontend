import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  baseurl=environment.baseUrl;
  constructor(private httpClient :HttpClient) { }

  postServive(url: string, reqdata: any, token: boolean= false, httpOptions: any={}){
    return this.httpClient.post(this.baseurl+url,reqdata,token && httpOptions)
  }
}