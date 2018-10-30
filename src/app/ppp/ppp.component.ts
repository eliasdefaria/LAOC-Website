import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-ppp',
  templateUrl: './ppp.component.html',
  styleUrls: ['./ppp.component.css']
})
export class PppComponent implements OnInit {
  thinWindow: boolean = false;

  constructor() { }

  ngOnInit() {
    if(window.innerWidth < 992){
      this.thinWindow = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(window.innerWidth < 992){
      this.thinWindow = true;
    }
    else{
      this.thinWindow = false;
    }
  }

}
