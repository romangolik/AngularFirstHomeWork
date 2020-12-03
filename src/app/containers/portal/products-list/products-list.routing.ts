import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProductsListComponent} from "./products-list.component";

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
  },
  {
    path: 'product-info/:id',
    loadChildren: () => import('./product-info/product-info.module').then(u => u.ProductInfoModule)
  },
  {
    path: 'product-info',
    loadChildren: () => import('./product-info/product-info.module').then(u => u.ProductInfoModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsListRouting { }
