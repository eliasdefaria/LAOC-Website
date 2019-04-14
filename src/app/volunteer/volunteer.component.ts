import { Component, OnInit, HostListener } from '@angular/core';

import * as dateFormat from 'dateformat';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {
  mobile: boolean = false

  now = new Date()

  constructor() { }

  ngOnInit() {
    if(window.innerWidth < 992){
      this.mobile = true;
    }

    this.now = dateFormat(this.now, "dddd, mmmm dS, yyyy");
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
}
