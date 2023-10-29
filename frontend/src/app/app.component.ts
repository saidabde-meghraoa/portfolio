import { Component, OnInit } from '@angular/core';
import { LanguageService } from "src/app/services/language/language.service"
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.languageService.initLanguage()
    AOS.init({
      duration: 1000
    });
  }
}
