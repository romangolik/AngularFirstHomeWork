import { Component, Input } from '@angular/core';
import {ProductInfo} from "../productinfo";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() productInfo: ProductInfo;
}
