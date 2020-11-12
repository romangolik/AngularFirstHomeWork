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
        redirectTo: 'products-list',
        pathMatch: 'full'
      },
      {
        path: 'products-list',
        loadChildren: () => import('./products-list/products-list.module').then(u => u.ProductsListModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRouting { }
