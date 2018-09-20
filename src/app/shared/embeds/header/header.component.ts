import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DonateComponent } from '../donate/donate.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;
  constructor(
    private popup: MatDialog
  ) { }

  ngOnInit() {
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

}
