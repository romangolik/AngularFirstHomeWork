import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationCheckGuard } from './auth/authorization-check.guard';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    RouterModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ AuthorizationCheckGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
