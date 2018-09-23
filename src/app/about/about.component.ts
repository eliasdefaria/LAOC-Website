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
  }

  @HostListener("window:scroll", [])
    onWindowScroll() {
      this.scrolled = true;
    }

}