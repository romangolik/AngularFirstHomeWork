import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoFormComponent } from './product-info-form.component';
import { FormsModule } from '@angular/forms';
import { ToasterMessageComponent } from '../toaster-message/toaster-message.component';



@NgModule({
  declarations: [
    ToasterMessageComponent,
    ProductInfoFormComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
  ],
  exports: [ ProductInfoFormComponent ]
})
export class ProductInfoFormModule { }
