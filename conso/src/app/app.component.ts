import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

import {TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  locale = 'fr_FR'

  constructor(
    public auth: AuthService, 
    private router:Router,
    private translate: TranslateService) {
      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang('en_GB');
      
               // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(this.locale);
  }

  goConso():void {
    this.router.navigate(['conso']);
  }

  onLocaleChange(targetLocale: string) {
    this.translate.use(targetLocale);
  }
}
