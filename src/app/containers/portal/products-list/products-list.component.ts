import {Component, EventEmitter, Input, Output} from '@angular/core';
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

  showForm: boolean = false;
  displayedProductIndex: number;

  showCardInfo(id: number) {
    this.showForm = !this.showForm;
    this.displayedProductIndex = id;
  }

  changeProductInfo(productInfo: ProductInfo) {
    this.arrayOfProducts[this.displayedProductIndex] = productInfo;
    this.showForm = false;
  }
}
