import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCardComponent} from "./product-card/product-card.component";
import {ProductsListComponent} from "./products-list.component";
import {ProductsListRouting} from "./products-list.routing";

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ProductsListRouting
  ],
  exports:[
    ProductsListComponent
  ]
})
export class ProductsListModule { }
