import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortalComponent} from "./portal.component";
import {CatalogModule} from "./catalog/catalog.module";

import {PortalRouting} from "./portal.routing";
import {HeaderComponent} from "../../components/header/header.component";

@NgModule({
  imports: [
    CommonModule,
    PortalRouting,
    CatalogModule,
  ],
  declarations: [
    PortalComponent,
    HeaderComponent,
  ],
  exports: [ PortalComponent ]
})
export class PortalModule { }
