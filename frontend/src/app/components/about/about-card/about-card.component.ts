import {Component, Input} from '@angular/core';
import {faFileCode, IconDefinition} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss']
})
export class AboutCardComponent {
  @Input() img! : String;
  @Input() title! : String;
  @Input() body! : String;
}
