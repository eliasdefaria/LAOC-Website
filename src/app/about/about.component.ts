import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  scrolled: boolean = false;
  constructor() { }

  ngOnInit() {
    if(window.innerWidth < 1200){
      this.scrolled=true;
    }
  }

  @HostListener("window:scroll", [])
    onWindowScroll() {
      this.scrolled = true;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
      if(window.innerWidth < 1200){
        this.scrolled=true;
      }
    }

}
