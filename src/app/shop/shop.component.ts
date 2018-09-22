import { Component, OnInit } from '@angular/core';
import { ShirtComponent } from '../shared';
import { MatDialog, MatDialogConfig } from '@angular/material';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(
    private popup: MatDialog
  ) { }

  ngOnInit() {
  }

  openPopup(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;

    const dialogRef = this.popup.open(ShirtComponent, dialogConfig);
  }

}
