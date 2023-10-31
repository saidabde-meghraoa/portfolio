import { Component } from '@angular/core';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  protected readonly faLinkedin = faLinkedin;
  protected readonly faGithub = faGithub
}
