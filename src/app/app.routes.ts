import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES = [
  { path: '', redirectTo: 'widgets', pathMatch: 'full'},
  { path: 'widgets', loadChildren: './+widgets#WidgetsModule'},
  { path: '**',    component: NoContentComponent },
];
