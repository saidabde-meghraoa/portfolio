import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() projectID!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() images!: string[];
  @Input() technologies: string[] | undefined;

  customOptions: OwlOptions = {
    items: 1,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    navSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 3000
  } 
}
