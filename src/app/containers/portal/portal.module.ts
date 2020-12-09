import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortalComponent} from "./portal.component";
import {ProductsListModule} from "./products-list/products-list.module";

import {PortalRouting} from "./portal.routing";
import {HeaderComponent} from "../../components/header/header.component";
import { ToasterMessageComponent } from '../../components/toaster-message/toaster-message.component';
import { ToasterMessageMenageService } from '../../core/toaster-message-manage/toaster-message-menage.service';
import { DataExchangeService } from '../../core/data-exchange.service';

@NgModule({
  imports: [
    CommonModule,
    PortalRouting,
    ProductsListModule,
  ],
  declarations: [
    PortalComponent,
    HeaderComponent,
    ToasterMessageComponent,
  ],
  providers: [
    DataExchangeService,
    ToasterMessageMenageService
  ],
  exports: [ PortalComponent ]
})
export class PortalModule { }
