import { Component, OnInit } from '@angular/core';
import { ShirtComponent, DonateComponent } from '../shared';
import { MatDialog, MatDialogConfig } from '@angular/material';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(
    private shirtPopup: MatDialog,
    private donatePopup: MatDialog

  ) { }

  ngOnInit() {
  }

  openPopup(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;

    const dialogRef = this.shirtPopup.open(ShirtComponent, dialogConfig);
  }

  /*openDonate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;

    const dialogRef = this.donatePopup.open(DonateComponent, dialogConfig);
  }*/

}
