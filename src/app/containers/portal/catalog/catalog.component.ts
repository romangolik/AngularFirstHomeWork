import { Component } from '@angular/core';
import {ProductInfo} from "./productinfo";
import {productsInfo} from "./product-info";


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {

  constructor() { }

  arrayOfProducts: ProductInfo[] = productsInfo;
}
