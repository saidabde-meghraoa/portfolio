import { Component } from '@angular/core';
import {faFileCode} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  protected readonly icon = faFileCode;
  protected  readonly title = "Abn";
  protected readonly body = "defdf";

}
