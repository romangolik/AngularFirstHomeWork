import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductInfo } from '../productinfo';
import { productsInfo } from '../product-info';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private routeTo: Router ) {}

  product: ProductInfo;
  productCopy: ProductInfo;
  close = false;
  savedChanges = false;

  ngOnInit() {
    this.product = productsInfo[this.route.snapshot.params['id']];
    this.productCopy = new ProductInfo(this.product);
  }

  saveProductInfo() {
    this.savedChanges = true;
    this.savePreviousValue(ProductInfo.isEqual(this.product, this.productCopy));
  }

  closePage() {
    this.close = true;
    this.savePreviousValue(ProductInfo.isEqual(this.product, this.productCopy));
  }

  agreeSave(agree: boolean) {
    this.routeTo.navigateByUrl('/');
  }

  savePreviousValue(equals) {
    if(equals) {
      this.routeTo.navigateByUrl('/');
    }
  }
}
