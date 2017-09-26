import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { AuthService } from './auth/auth.service';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

import { PersistanceService } from './_services/persistance.service';
import { CallBackComponent } from './call-back/call-back.component';

const appRoutes: Routes = [
 
  { path: 'list', component: ListComponent },
  { path: 'edit', component: EditComponent },
  { path: 'callback', component: CallBackComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    CallBackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [PersistanceService, AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }


