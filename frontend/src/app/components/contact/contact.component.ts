import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private translate: TranslateService) { }

  sendEmail(): void {
    const mail = this.translate.instant('mail.mailto')
    window.location.href = `mailto:${mail}`
  }
}
