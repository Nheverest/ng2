import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import {TranslateModule} from '@ngx-translate/core';

import { AuthService } from './auth/auth.service';
import { PersistanceService } from './_services/persistance.service';

import { AuthGuard } from './_guards/auth.guard';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { CallbackComponent } from './callback/callback.component';

import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent, 
    ListComponent,
    EditComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    TranslateModule.forRoot()
  ],
  providers: [PersistanceService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { } 