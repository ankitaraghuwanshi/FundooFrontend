import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/data.service';
import { LabelComponent } from '../label/label.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;
  token: any
  message: any
  value: any

  private _mobileQueryListener: () => void;


  constructor(public dialog: MatDialog, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router, private snackBar: MatSnackBar, private data: DataService,) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.mobileQuery.addListener(this._mobileQueryListener);
    ;
  }

  searchtitle(event: any) {
    console.log("input in search field ===", event.target.value);
    this.value = event.target.value
    let Ddata = {
      type: 'search',
      data: [this.value]
    }
    this.data.changeMessage(Ddata)
  }

  Logout() {
    this.token = localStorage.removeItem('token');
    this.router.navigateByUrl('/login')
    this.snackBar.open('Logout Successfully..!!!', '..', {
      duration: 3000,
    })
  }

 

  openDialog(): void {
    const dialogRef = this.dialog.open(LabelComponent, {
      width: 'auto',
      height:'auto',
    
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
}

