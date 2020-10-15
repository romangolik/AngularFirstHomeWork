import { Component, OnInit } from '@angular/core';
import {ProductInfo} from "./productinfo";
import {productsInfo} from "./product-info";


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  arrayOfProducts: ProductInfo[] = productsInfo;
}
