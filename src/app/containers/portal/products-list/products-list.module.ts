import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductCardComponent } from "./product-card/product-card.component";
import { ProductsListComponent } from "./products-list.component";
import { ProductsListRouting } from "./products-list.routing";
import { ProductInfoFormComponent } from "../../../components/product-info-form/product-info-form.component";

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductsListComponent,
    ProductInfoFormComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ProductsListRouting
  ],
  exports:[
    ProductsListComponent
  ]
})
export class ProductsListModule { }
