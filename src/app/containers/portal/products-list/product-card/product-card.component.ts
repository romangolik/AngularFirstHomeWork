import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductInfo} from "../productinfo";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() productInfo: ProductInfo;

  @Input() active: boolean;
  @Output() activeChange = new EventEmitter<boolean>();

  openProductInfoForm() {
    this.activeChange.emit(!this.active);
  }
}
