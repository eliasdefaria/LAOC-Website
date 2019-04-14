import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NewsletterRegisterComponent } from '../shared/embeds/newsletter-register/newsletter-register.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  scrolled: boolean = false;
  constructor(
    private popup: MatDialog
  ) { }

  ngOnInit() {
    if(window.innerWidth < 1200){
      this.scrolled=true;
    }
  }

  openModal(){
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

  @HostListener("window:scroll", [])
    onWindowScroll() {
      this.scrolled = true;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
      if(window.innerWidth < 1200){
        this.scrolled=true;
      }
    }

}
