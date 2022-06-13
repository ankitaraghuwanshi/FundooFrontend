import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';



import { LabelserviceService } from 'src/app/services/labelservice.service';
export interface DialogData { labelname: string; }


@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})

export class LabelComponent implements OnInit {
  @Input() GetLable: any;
  lableName: any;
  isLable: boolean = false;
  isDelete: boolean = false;
  LabelName:any;
  lableArray:any=[];
  userId :any;
  
 

  constructor(private lable: LabelserviceService,private snackBar:MatSnackBar) {}
  hideAndShow() {
    console.log("calling hide")
    this.isLable = !this.isLable

  }
  show() {
    this.isDelete = !this.isDelete
  }

  ngOnInit(): void {
    this.getAllLable();
  }
 
  onCreate() {




    let reqdata = {
      labelName: this.lableName
    };
    this.lable.createLabel(reqdata).subscribe((response: any) => {
      console.log(response);


    });
  }
 getAllLable() { 
    let reqdata = {
      userId : [this.lableArray.userId ],
    }
    // console.log(this.userId,"anki  raghu" )
  
    this.lable.getAllLable(reqdata).subscribe((response: any) => {
        this.lableArray = response.data;
        console.log(response);
        this.lableArray.reverse();
    })
  }
  
  
  Deletelabel(LabelA:any) {
    let reqdata = {
     
      labelId : LabelA.labelId
     

    }
    console.log(" delete label", reqdata)
    this.lable.DeletelabelbylabelId(reqdata).subscribe((response: any) => {
      console.log('label deleted', response);
      this.snackBar.open('label permanently deleted..!!!', '..', {
        duration: 3000,
      })

    })

   
  }
}

  



  
  

  
  

