import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListRouting } from "./products-list.routing";

import { ProductCardComponent } from "./product-card/product-card.component";
import { ProductsListComponent } from "./products-list.component";
import { HttpClientModule } from '@angular/common/http';
import { ProductsInfoService } from '../../../rest/products-info/products-info.service';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductsListRouting
  ],
  exports:[
    ProductsListComponent
  ],
  providers: [ ProductsInfoService ]
})
export class ProductsListModule { }
