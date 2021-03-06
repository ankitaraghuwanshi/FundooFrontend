import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../HttpService/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;

  constructor(private httpService: HttpserviceService) {
    this.token = localStorage.getItem('token')
  }

  createnote(reqdata: any) {
    this.token = localStorage.getItem('token')
    console.log(reqdata);
    console.log(this.token)

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    
    return this.httpService.postService('Note', reqdata, true, header)
    
  }
  getNoteList() {
    this.token = localStorage.getItem('token')
    console.log("Get All Notes")
    let header = {
      headers: new HttpHeaders({
        'Content-Type': ' application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getService('Note/GetAllNotes', true, header)
  }
  updateNote(reqdata: any,noteId:any) {
    
    console.log("inside note service", reqdata);

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer '+ this.token
      })
    }
    return this.httpService.putService(`Note/Update/${noteId}`, reqdata, true, header)
  }
  
  TrashNote(reqdata: any) {
    console.log(reqdata);
    

    let header = {
      headers: new HttpHeaders({
        
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,

      }),
    };
    return this.httpService.putService( `Note/TrashNote/${reqdata.noteId}`, reqdata, true,header );
  }
  ArchiveNote(reqdata: any) {
    console.log(reqdata);
    

    let header = {
      headers: new HttpHeaders({
        
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,

      }),
    };
    return this.httpService.putService( `Note/ArchieveNote/${reqdata.noteId}`, reqdata, true,header );
  }
 
  changecolourofNote(reqdata: any) {
    console.log(reqdata);
    

    let header = {
      headers: new HttpHeaders({
        
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,

      }),
    };
    return this.httpService.putService(`Note/ChangeColour/${reqdata.noteId}/${reqdata.colour}`,{}, true,header );
  }  

  DeleteNote(reqdata: any) {
    console.log(reqdata);
    

    let header = {
      headers: new HttpHeaders({
        
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,

      }),
    };
    return this.httpService.deleteService( `Note/Delete/${reqdata.noteId}`, true,header );
  }
}


  


