import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Http } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import {TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { PersistanceService } from './services/persistance.service';

import { ConsoComponent } from './conso.component';
import { ListComponent } from '../conso/list/list.component';
import { EditComponent } from '../conso/edit/edit.component';

import { consoRoutes } from './conso.routes';

@NgModule({
  declarations: [
    ConsoComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(
      consoRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    TranslateModule.forRoot()
  ],
  providers: [PersistanceService],
  bootstrap: [ConsoComponent]
})

export class ConsoModule { } 
