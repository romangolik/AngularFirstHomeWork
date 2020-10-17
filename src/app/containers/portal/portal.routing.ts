import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PortalComponent} from "./portal.component";

const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      {
        path: '',
        redirectTo: 'products-list'
      },
      {
        path: 'products-list',
        loadChildren: () => import('./catalog/catalog.module').then(u => u.CatalogModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRouting { }
