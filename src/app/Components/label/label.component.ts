import { Component, Inject, Input, OnInit } from '@angular/core';



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


  constructor(private lable: LabelserviceService) {}
  hideAndShow() {
    console.log("calling hide")
    this.isLable = !this.isLable

  }
  show() {
    this.isDelete = !this.isDelete
  }

  ngOnInit(): void {}
 
  onCreate() {




    let reqdata = {
      labelName: this.lableName
    };
    this.lable.createLabel(reqdata).subscribe((response: any) => {
      console.log(response);


    });
  }
}

  



  
  

  
  

