import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminPageComponent} from "./admin-page.component";
import {AdminPageRouting} from "./admin-page.routing";



@NgModule({
  declarations: [ AdminPageComponent ],
  imports: [
    CommonModule,
    AdminPageRouting
  ],
  exports: [ AdminPageComponent ]
})
export class AdminPageModule { }
