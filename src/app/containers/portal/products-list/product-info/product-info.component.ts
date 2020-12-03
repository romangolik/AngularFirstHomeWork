import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductInfo } from '../../../../rest/products-info/productinfo';
import { ProductsInfoService } from '../../../../rest/products-info/products-info.service';
import { ToasterMessageMenageService } from '../../../../core/toaster-message-manage/toaster-message-menage.service';
import { DataExchangeService } from '../../../../core/data-exchange.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit, OnDestroy {

  constructor(private routeTo: Router,
              private route: ActivatedRoute,
              private dataExchangeService: DataExchangeService,
              private productsInfoService: ProductsInfoService,
              private toasterMessageMenageService: ToasterMessageMenageService) {}

  close = false;
  message: string;
  idOfProduct: number;
  savedChanges = false;
  product: ProductInfo;
  productCopy: ProductInfo;
  subscription: Subscription;

  ngOnInit() {
    this.idOfProduct = this.route.snapshot.params['id'];
    this.productsInfoService.getProduct(this.idOfProduct)
      .subscribe(result => this.product = new ProductInfo(result));
    this.productCopy = new ProductInfo(this.product);
  }

  saveProductInfo() {
    this.savedChanges = true;
    this.addOrChangeInfoAboutProduct(ProductInfo.isEqual(this.product, this.productCopy), true);
  }

  closePage() {
    this.close = true;
    this.saveChanges(
      ProductInfo.isEqual(this.product, this.productCopy));
    this.toasterMessageMenageService.showToasterMessage("Информация о продукте не сохранена, вы хотите ее сохранить?");
  }

  saveChanges(equals) {  //"Информация о продукте не сохранена, вы хотите ее сохранить?"
    this.subscription = this.dataExchangeService.agreeWithChange$.subscribe(agree => {
        this.addOrChangeInfoAboutProduct(equals, agree);
      });
  }

  addOrChangeInfoAboutProduct(equals: boolean, agree: boolean) {
    if(equals) {
      this.routeTo.navigateByUrl('/');
    } else if (!equals && agree) {
      if(this.idOfProduct !== undefined) {
        this.productsInfoService.updateProduct(this.idOfProduct, this.productCopy)
          .subscribe(value => this.message = value);
      } else {
        this.productsInfoService.addProduct(this.productCopy)
          .subscribe(value => this.message = value);
      }
      this.toasterMessageMenageService.showToasterMessage(this.message);
    }
  }

  ngOnDestroy() {
    if(this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }
}
