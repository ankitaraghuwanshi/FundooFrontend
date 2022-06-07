import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/NoteService/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  notesarray = [];
  constructor(private Note: NoteService) { }




  ngOnInit(): void {
    this.getallNote();
  }
  getallNote() {
    this.Note.getNoteList().subscribe(
      (response: any) => {
        this.notesarray = response.data;
        console.log(response);
        this.notesarray.reverse();
        this.notesarray = this.notesarray.filter((object: any) => {
          return object.isTrash=== false && object.isArchieve === false
        })
      }
    )
  }
  receiveMessagefromdisplaycard($event: any) {
    console.log("insidegetallnotes", $event);
    this.getallNote()
  }
}
