import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DonateComponent } from '../donate/donate.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;
  thinWindow: boolean = false;
  constructor(
    private popup: MatDialog
  ) { }

  ngOnInit() {
    if(window.innerWidth < 992){
      this.thinWindow = true;
    }
    else{
      this.thinWindow = false;
    }
  }

  toggleNavbar(){
    this.navbarOpen = !this.navbarOpen;
  }

  openPopup(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;

    const dialogRef = this.popup.open(DonateComponent, dialogConfig);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(window.innerWidth < 992){
      this.thinWindow = true;
      this.navbarOpen = false;
    }
    else{
      this.thinWindow = false;
    }
  }

}
