import { Component, OnInit, HostListener } from '@angular/core';
import { ShirtComponent, DonateComponent } from '../shared';
import { MatDialog, MatDialogConfig } from '@angular/material';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  mobile: boolean = false;
  constructor(
    private shirtPopup: MatDialog,
    private donatePopup: MatDialog

  ) { }

  ngOnInit() {
    if(window.innerWidth < 992){
      this.mobile = true;
    }
  }

  openPopup(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;

    const dialogRef = this.shirtPopup.open(ShirtComponent, dialogConfig);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(window.innerWidth < 992){
      this.mobile = true;
    }
    else{
      this.mobile = false;
    }
  }

  getWidth(){
    if(!this.mobile){
      return "25rem";
    }
    else{
      return "20rem";
    }
  }
  /*openDonate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;

    const dialogRef = this.donatePopup.open(DonateComponent, dialogConfig);
  }*/

}
