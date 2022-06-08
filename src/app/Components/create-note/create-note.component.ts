import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/NoteService/note.service';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  show = false;
  submitted=false
  createnoteform!:FormGroup;
  
  

  constructor(private formBuilder: FormBuilder, private Note : NoteService,private snackBar:MatSnackBar ) { }
 
  hideAndShow() {
    console.log("calling hide");
    this.show = !this.show;

  }
 
  ngOnInit() {
    this.createnoteform = this.formBuilder.group({
    Title: ['', Validators.required],
    description: ['', Validators.required],
  
      

    });
  }
  onsubmit() {
    this.submitted = true;
    console.log("calling api")
    if (this.createnoteform.valid) {

      let reqdata = {
        title: this.createnoteform.value.Title,
        description: this.createnoteform.value.description,
       
       colour:""

      }
     
      this.Note.createnote(reqdata).subscribe((response: any) => {
        console.log(response);
       
        this.snackBar.open('note created Successfully..!!!','..', {
          duration: 3000,
        })
        
      })
      
    }
  }
  
}