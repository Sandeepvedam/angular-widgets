import { WidgetsComponent } from './widgets.component.ts';

export const routes = [
  { path: '', children: [
    { path: '', component: WidgetsComponent }
  ]},
];


