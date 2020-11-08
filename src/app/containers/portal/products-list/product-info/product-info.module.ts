import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoComponent } from './product-info.component';
import { ProductInfoRouting } from './product-info.routing';
import { FormsModule } from '@angular/forms';
import { ToasterMessageComponent } from 'src/app/components/toaster-message/toaster-message.component';

@NgModule({
  declarations: [
    ProductInfoComponent,
    ToasterMessageComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ProductInfoRouting
  ],
  exports: [ ProductInfoComponent ]
})
export class ProductInfoModule { }
