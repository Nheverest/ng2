import { Routes } from '@angular/router';

import { AuthGuard } from './_guards/auth.guard';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { CallBackComponent } from './call-back/call-back.component';

export const appRoutes: Routes = [
    
     { path: 'list', component: ListComponent },
     { path: 'edit', component: EditComponent, canActivate: [AuthGuard] },
     { path: 'callback', component: CallBackComponent },
     { path: '**', redirectTo: '/', pathMatch: 'full' },
   ];
   
   