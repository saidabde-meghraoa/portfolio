import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.translateService.addLangs(["fr", "en"])
    this.translateService.setDefaultLang("en")
    AOS.init({
      duration: 1000
    });
  }
}
