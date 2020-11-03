import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardComponent } from "./product-card/product-card.component";
import { ProductsListComponent } from "./products-list.component";
import { ProductsListRouting } from "./products-list.routing";
import { ProductInfoFormModule } from '../../../components/product-info-form/product-info-form.module';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    ProductsListRouting,
    ProductInfoFormModule
  ],
  exports:[
    ProductsListComponent
  ]
})
export class ProductsListModule { }
