import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoFormComponent } from './product-info-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductInfoFormComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
  ],
  exports: [ ProductInfoFormComponent ]
})
export class ProductInfoFormModule { }
