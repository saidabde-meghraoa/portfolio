import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSticky: boolean = false;
  faHome = faHome;
  faUser = faUser;
  faEnvelope = faEnvelope;
  faChartLine = faChartLine;

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
