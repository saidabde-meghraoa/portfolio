import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSticky: boolean = false;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    if (window.scrollY > 25) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }
}
