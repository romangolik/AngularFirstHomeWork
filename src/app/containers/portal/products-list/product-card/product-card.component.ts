import { Component, EventEmitter, Input, Output } from '@angular/core';
import {ProductInfo} from "../../../../rest/products-info/productinfo";
import { ToasterMessageMenageService } from '../../../../core/toaster-message-manage/toaster-message-menage.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() productInfo: ProductInfo;
  @Input() indexOfProduct: number;

  @Output() idOfDeletedProduct = new EventEmitter<number>();

  constructor(private toasterMessageMenageService: ToasterMessageMenageService) {}

  deleteProduct() {
    this.idOfDeletedProduct.emit(this.indexOfProduct);
    this.toasterMessageMenageService.showToasterMessage("Продукт успешно удален");
  }
}
