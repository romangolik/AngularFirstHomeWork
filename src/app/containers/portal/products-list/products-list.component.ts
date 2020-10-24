import { Component } from '@angular/core';
import {ProductInfo} from "./productinfo";
import {productsInfo} from "./product-info";


@Component({
  selector: 'app-catalog',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  constructor() { }

  arrayOfProducts: ProductInfo[] = productsInfo;
}
