import { Component, EventEmitter } from '@angular/core';
import {ProductInfo} from "../../../rest/products-info/productinfo";
import { ProductsInfoService } from '../../../rest/products-info/products-info.service';
import { productsInfo } from '../../../rest/products-info/product-info';


@Component({
  selector: 'app-catalog',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  arrayOfProducts: ProductInfo[];
  message: string;

  constructor(public productsInfoService: ProductsInfoService) {
    this.productsInfoService.getProducts()
      .subscribe(result => this.arrayOfProducts = result.map(item => new ProductInfo(item)))
  }

  deleteProduct(id: number) {
    this.productsInfoService.deleteProduct(id)
      .subscribe(value => this.message = value);
    this.arrayOfProducts.splice(id, 1);
  }
}


