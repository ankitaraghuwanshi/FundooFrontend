
import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/NoteService/note.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  title: any
  description: any
  noteId: any


  constructor(public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private update: NoteService

  ) {
    this.title = this.data.title;
    this.description = this.data.description;
    this.noteId = this.data.noteId;
  }
  ngOnInit(): void {
    console.log(this.data);

  }
  onsubmit() {
    let reqdata = {
      title: this.title,
      description: this.description,
      colour: "red"
    }
    this.update.updateNote(reqdata, this.noteId).subscribe((respone: any) => {
      console.log('update response: ', respone)
    })
  }
}
