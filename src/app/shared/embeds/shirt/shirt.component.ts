import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.css']
})
export class ShirtComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ShirtComponent>
  ) { }

  ngOnInit() {
  }



}
