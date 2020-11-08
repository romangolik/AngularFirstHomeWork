import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListRouting } from "./products-list.routing";

import { ProductCardComponent } from "./product-card/product-card.component";
import { ProductsListComponent } from "./products-list.component";

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductsListComponent
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
