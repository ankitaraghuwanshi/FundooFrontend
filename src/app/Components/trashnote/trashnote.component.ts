import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/NoteService/note.service';

@Component({
  selector: 'app-trashnote',
  templateUrl: './trashnote.component.html',
  styleUrls: ['./trashnote.component.scss']
})
export class TrashnoteComponent implements OnInit {
  trashsarray: any = [];

  constructor(private Note: NoteService) { }

  ngOnInit(): void {
    this.GetAllTrash()
  }
  GetAllTrash() {
    this.Note.getNoteList().subscribe(
      (response: any) => {


        this.trashsarray = response.data;
        console.log(this.trashsarray);
        this.trashsarray = response.data;
        this.trashsarray.reverse();
        this.trashsarray = this.trashsarray.filter((object: any) => {
          return object.isTrash === true;
        })

      })
     
     
  }

  // deleteNote(note: any) {
  //   let data = {
  //    // isTrash: this.isTrash
  //   }
  //   this.Note.deleteNote(note).subscribe(data => {
  //     console.log(data);
  //     this.GetAllTrash();
  //   })
  // }
}


