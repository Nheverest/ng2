import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import {TranslateModule} from '@ngx-translate/core';

import { ConsoModule } from './conso/conso.module';
import { AuthService } from './auth/auth.service';

import { AuthGuard } from './_guards/auth.guard';

import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';

import { appRoutes } from './app.routes';

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
    TranslateModule.forRoot(),
    ConsoModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { } 