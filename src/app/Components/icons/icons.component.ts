import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/services/NoteService/note.service';
import { ArchiveComponent } from '../archive/archive.component';
import { TrashnoteComponent } from '../trashnote/trashnote.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})

export class IconsComponent implements OnInit {
  @Input() Card: any;
  @Output() iconstodisplay = new EventEmitter<string>()
  NoteListId:any;
  noteId: any;
  isTrash: boolean = false;
  isArchieve: boolean = false;
  
  constructor(private Note: NoteService, private snackBar: MatSnackBar, private router: ActivatedRoute) { }

  ngOnInit(): void {

    let Compo = this.router.snapshot.component;

    if (Compo == TrashnoteComponent) {
      this.isTrash = true;
      console.log("trash is working")
    }

    
    let arc = this.router.snapshot.component;
    if (arc == ArchiveComponent) {
      this.isArchieve = true;
      console.log("for unarchive");
    }

  }

  Trash() {
    let reqdata = {
      noteId: [this.Card.noteId],
      isTrash: true,

    }
    console.log("Trashnote", reqdata)
    this.Note.TrashNote(reqdata).subscribe((response: any) => {
      console.log('notes in trash', response);
      this.iconstodisplay.emit(response);

    })

   
  }
  Archive() {
    let reqdata = {
      noteId: [this.Card.noteId],
      isArchieve: true,

    }
    console.log("Archive note", reqdata)
    this.Note.ArchiveNote(reqdata).subscribe((response: any) => {
      console.log('notes archived', response);
      this.iconstodisplay.emit(response);

    })
  
  }

  onUnarchive() {
    let reqdata = {
      noteId: [this.Card.noteId],
      isArchieve:false,

    }
    console.log("unArchive note", reqdata)
    this.Note.ArchiveNote(reqdata).subscribe((response: any) => {
      console.log('notes unarchived is done', response);


    })
   
  }

  restore()  {
    let reqdata = {
      noteId: [this.Card.noteId],
      isTrash: false,

    }
    console.log("restore note", reqdata)
    this.Note.TrashNote(reqdata).subscribe((response: any) => {
      console.log('working on restore', response);


    })

    
  }

  setColour(color: any) {
   this.Card.colour=color
    let reqdata = {
      colour: color,
      noteId: [this.Card.noteId],

    }
    this.Note.changecolourofNote(reqdata).subscribe(
      (response: any) => {
        console.log(response);
        this.iconstodisplay.emit(response);
      }
    )

  }

  colorarray= [
  {Colorcode:"pink"},
  {Colorcode:"yellow"},
  {Colorcode:"orange"},
  {Colorcode:"rgb(255,99,71)"},
  {Colorcode:"rgb(152,251,152)"},
  {Colorcode:"Teal"},
  {Colorcode:"rgb(106,90,205)"},
  {Colorcode:"rgb(240,230,140)"},
  {Colorcode:"rgb(238,130,238)"},
  {Colorcode:"rgb(255,160,122)"}];

 
  Delete() {
    let reqdata = {
      noteId: [this.Card.noteId],
      isTrash: true,

    }
    console.log(" delete note", reqdata)
    this.Note.DeleteNote(reqdata).subscribe((response: any) => {
      console.log('permanently deleted', response);
      this.snackBar.open('note permanently deleted..!!!', '..', {
        duration: 3000,
      })

    })

   
  }
}












