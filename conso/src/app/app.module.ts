import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ConsoModule } from './conso/conso.module';
import { AuthService } from './auth/auth.service';

import { AuthGuard } from './_guards/auth.guard';

import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';

import { appRoutes } from './app.routes';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
} 

@NgModule({
  declarations: [
    AppComponent, 
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
  }),
    ConsoModule
  ],
  providers: [AuthService, AuthGuard, HttpClient],
  bootstrap: [AppComponent]
})

export class AppModule { } 