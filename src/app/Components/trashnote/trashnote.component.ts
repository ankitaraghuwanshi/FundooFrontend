import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/NoteService/note.service';

@Component({
  selector: 'app-trashnote',
  templateUrl: './trashnote.component.html',
  styleUrls: ['./trashnote.component.scss']
})
export class TrashnoteComponent implements OnInit {
  trasharray: any=[];
  
  constructor(private Note:NoteService) { }

  ngOnInit(): void {
    this.gettrash()
  }
  gettrash() {    
    this.Note.getNoteList().subscribe(
      (response: any) => {


        this.trasharray = response.data;
        console.log(this.trasharray);
        this.trasharray = this.trasharray.filter((object: any) => {
          return  object.isTrash === true;
        } )

      })
  }
}
 
  
