import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoComponent } from './product-info.component';
import { ProductInfoRouting } from './product-info.routing';
import { FormsModule } from '@angular/forms';
import { ToasterMessageComponent } from 'src/app/components/toaster-message/toaster-message.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProductInfoComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    ProductInfoRouting
  ],
  exports: [ ProductInfoComponent ]
})
export class ProductInfoModule { }
