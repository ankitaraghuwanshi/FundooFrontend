import { Component, Input, OnInit } from '@angular/core';


import { NoteService } from 'src/app/services/NoteService/note.service';



@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() Card: any;
  noteId: any;
  // isDeleted:boolean=false
  // isArchived:boolean=false

  constructor(private Note:NoteService ) { }

  ngOnInit(): void {
    
    }
   
  

  Trash() {
    let reqdata = {
      noteId:[this.Card.noteId],
      isDeleted: true,

    }
    console.log("Trashnote",reqdata)
    this.Note.TrashNote(reqdata).subscribe((response: any) => {
      console.log('notes deleted', response);
      
      
    })
  } 
  
  Archive() {
    let reqdata = {
      noteId:[this.Card.noteId],
      isDeleted: true,

    }
    console.log("Archivenote",reqdata)
    this.Note.ArchiveNote(reqdata).subscribe((response: any) => {
      console.log('notes deleted', response);
      
    })
  } 

//   setColor(color:any){
//     this.noteObject.Color = color;
//     let reqData = {
//       Color:color

//     }
//     this. NoteService.updateNoteService(reqData,this.noteId).subscribe((res: any) => {
//       console.log(res); 

//   })
// }
} 



  


