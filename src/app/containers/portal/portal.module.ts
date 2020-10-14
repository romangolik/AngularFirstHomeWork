import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortalComponent} from "./portal.component";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PortalComponent,
  ],
  exports: [ PortalComponent ]
})
export class PortalModule { }
