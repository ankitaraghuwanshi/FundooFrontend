import { Component, OnInit } from '@angular/core';

import { NoteService } from 'src/app/services/NoteService/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  notesarray: any = [];
  sentmsg:any;
  constructor(private Note: NoteService) { }

  ngOnInit(): void {
    this.getarchive()
  }
  getarchive() {
    this.Note.getNoteList().subscribe(
      (response: any) => {


        this.notesarray = response.data;
        console.log(this.notesarray);
        this.notesarray = response.data
        this.notesarray.reverse();

        this.notesarray = this.notesarray.filter((object: any) => {
          return object.isArchieve === true;
        })
       
        
      })
      
  }
 
}


