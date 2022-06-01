import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  // hide = false
  constructor(private formBuilder: FormBuilder, private Note : NoteService ) { }
 
  hideAndShow() {
    console.log("calling hide");
    this.show = !this.show;
    // this.hide = !this.hide
  }
 
  ngOnInit() {
    this.createnoteform = this.formBuilder.group({
    Title: ['', Validators.required],
    description: ['', Validators.required],
      // colour: ['', [Validators.required,]],
      

    });
  }
  onsubmit() {
    this.submitted = true;
    console.log("api call")
    if (this.createnoteform.valid) {

      let reqdata = {
        title: this.createnoteform.value.Title,
        description: this.createnoteform.value.description,
        // colour:this.createnoteform.value.colour
       colour:"red"

      }
      console.log("anki")
      this.Note.createnote(reqdata).subscribe((response: any) => {
        console.log(response);
      })
    }
  }
}