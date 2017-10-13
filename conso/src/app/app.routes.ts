import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { FormObserverService } from './services/form-observer.service';

export const appRoutes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent,
    canDeactivate: [ FormObserverService ]
  },
  {
    path: 'conso',
    loadChildren: './conso/conso.module#ConsoModule',
    data: { preload: true }
  },
  { path: 'callback', component: CallbackComponent },
  { path: '', redirectTo: 'conso', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
   ];