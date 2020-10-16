import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCardComponent} from "./product-card/product-card.component";
import {CatalogComponent} from "./catalog.component";
import {CatalogPageRouting} from "./catalog.routing";

@NgModule({
  declarations: [
    CatalogComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    CatalogPageRouting
  ],
  exports:[
    CatalogComponent
  ]
})
export class CatalogModule { }
