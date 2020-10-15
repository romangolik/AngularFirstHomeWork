import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCardComponent} from "./product-card/product-card.component";
import {CatalogComponent} from "./catalog.component";

@NgModule({
  declarations: [
    CatalogComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CatalogComponent
  ]
})
export class CatalogModule { }
