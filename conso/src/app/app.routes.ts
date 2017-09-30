import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';

export const appRoutes: Routes = [
  {
    path: 'conso',
    loadChildren: './conso/conso.module#ConsoModule',
    data: { preload: true }
  },
  { path: 'callback', component: CallbackComponent },
  { path: '', redirectTo: 'conso', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
   ];