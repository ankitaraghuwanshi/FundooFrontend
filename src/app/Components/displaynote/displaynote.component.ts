import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  @Input() NoteArray:any
  constructor(public dialog: MatDialog) {}
 
  ngOnInit(): void {
  }
  openDialog(notecard:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '500px',
      height:'250px',
      
      data:notecard
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
}
