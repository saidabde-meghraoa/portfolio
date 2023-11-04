import { Component } from '@angular/core';
import {faGit, faCodepen, faFreeCodeCamp, faMeetup, faHtml5, faCss3, faWindows, faLinux, faEdge, faApple, faChrome, faAndroid, faFirefox} from "@fortawesome/free-brands-svg-icons";
import {faCoffee, faTerminal, faHeart, faCode} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  protected readonly faGit = faGit;
  protected readonly faMeetup = faMeetup;
  protected readonly faFreeCodeCamp = faFreeCodeCamp;
  protected readonly faCodepen = faCodepen;
  protected readonly faHtml5 = faHtml5;
  protected readonly faCss3 = faCss3;
  protected readonly faWindows = faWindows;
  protected readonly faEdge = faEdge;
  protected readonly faLinux = faLinux;
  protected readonly faApple = faApple;
  protected readonly faChrome = faChrome;
  protected readonly faAndroid = faAndroid;
  protected readonly faFirefox = faFirefox;
  protected readonly faCoffee = faCoffee;
  protected readonly faTerminal = faTerminal;
  protected readonly faHeart = faHeart;
  protected readonly faCode = faCode;
}
