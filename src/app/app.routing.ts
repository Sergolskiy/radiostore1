import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import {AppGuard} from "./app.guard";

export const AppRoutes: Routes = [{
  path: '',
  component: FullComponent,
  canActivate: [ AppGuard ],
  children: [{ 
    path: '', 
    redirectTo: '/starter', 
    pathMatch: 'full' 
  }, {
    path: '',
    loadChildren: './material-component/material.module#MaterialComponentsModule'
  }, {
    path: 'starter',
    loadChildren: './starter/starter.module#StarterModule'
  }]
}];

