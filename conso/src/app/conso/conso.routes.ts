import { Routes } from '@angular/router';

import { AuthGuard } from '../_guards/auth.guard';

import { ConsoComponent } from './conso.component';
import { ListComponent } from '../conso/list/list.component';
import { EditComponent } from '../conso/edit/edit.component';
import { CallbackComponent } from '../callback/callback.component';

export const consoRoutes: Routes = [

  { path: 'conso', component: ConsoComponent, children: 
    [
      { path: '', component: ListComponent },
      { path: 'list', component: ListComponent },
      { path: 'edit', component: EditComponent, canActivate: [AuthGuard] }
    ]
  }
];