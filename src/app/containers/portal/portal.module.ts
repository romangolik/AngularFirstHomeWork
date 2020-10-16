import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortalComponent} from "./portal.component";
import {CatalogModule} from "./catalog/catalog.module";

import {PortalRouting} from "./portal.routing";

@NgModule({
  imports: [
    CommonModule,
    PortalRouting,
    CatalogModule,
  ],
  declarations: [
    PortalComponent,
  ],
  exports: [ PortalComponent ]
})
export class PortalModule { }
