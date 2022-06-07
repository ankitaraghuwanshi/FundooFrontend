import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  @Input() NoteArray:any
  @Output() displaytogetallnotes=new EventEmitter<string>();
sentmsg:any;
subscription:any;
searchword:any;
message:any;
  constructor(public dialog: MatDialog,private data:DataService ) {}
 
  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(message => {
      this.message = message;
      console.log(message.data[0]);
      this.searchword = message.data[0]
    });
  }
  openDialog(notecard:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '500px',
      height:'270px',
      
      data:notecard
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
  recievefromiconstodisplaycard($event: any) {
    console.log("recievedindisplay", $event);
    this.sentmsg = $event
    this.displaytogetallnotes.emit(this.sentmsg)
  
  }
}
