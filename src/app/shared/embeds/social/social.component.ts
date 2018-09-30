import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
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
