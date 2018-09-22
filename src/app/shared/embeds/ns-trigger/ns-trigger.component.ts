import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NewsletterRegisterComponent } from '../newsletter-register/newsletter-register.component';

@Component({
  selector: 'app-ns-trigger',
  templateUrl: './ns-trigger.component.html',
  styleUrls: ['./ns-trigger.component.css']
})
export class NsTriggerComponent implements OnInit {

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
             alert("Thanks!");
           }
           else{
             //doesn't want notifications
           }
         }
     );
  }

}
