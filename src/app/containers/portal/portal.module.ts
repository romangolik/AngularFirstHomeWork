import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortalComponent} from "./portal.component";
import {ProductsListModule} from "./products-list/products-list.module";

import {PortalRouting} from "./portal.routing";
import {HeaderComponent} from "../../components/header/header.component";

@NgModule({
  imports: [
    CommonModule,
    PortalRouting,
    ProductsListModule,
  ],
  declarations: [
    PortalComponent,
    HeaderComponent,
  ],
  exports: [ PortalComponent ]
})
export class PortalModule { }
