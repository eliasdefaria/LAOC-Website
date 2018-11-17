import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NewsletterRegisterComponent } from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  counto: any;

  constructor(
    private popup: MatDialog
  ) { }

  ngOnInit() {
  }

  openNewsletter(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;

    const dialogRef = this.popup.open(NewsletterRegisterComponent, dialogConfig);

     dialogRef.afterClosed().subscribe(
         data => {
           if(data){

           }
           else{
             //doesn't want notifications
           }
         }
     );
  }
}
