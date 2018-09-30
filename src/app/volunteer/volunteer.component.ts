import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {
  mobile: boolean = false
  constructor() { }

  ngOnInit() {
    if(window.innerWidth < 992){
      this.mobile = true;
    }
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
