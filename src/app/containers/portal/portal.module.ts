import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortalComponent} from "./portal.component";
import {CatalogModule} from "./catalog/catalog.module";

@NgModule({
  imports: [
    CommonModule,
    CatalogModule,
  ],
  declarations: [
    PortalComponent,
  ],
  exports: [ PortalComponent ]
})
export class PortalModule { }
