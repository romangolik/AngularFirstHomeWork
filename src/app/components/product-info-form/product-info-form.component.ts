import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductInfo } from "../../containers/portal/products-list/productinfo";

@Component({
  selector: 'app-product-info-form',
  templateUrl: './product-info-form.component.html',
  styleUrls: [ './product-info-form.component.scss' ]
})
export class ProductInfoFormComponent implements OnInit{
  @Input() product: ProductInfo;
  @Output() saveNewInfo = new EventEmitter<ProductInfo>();

  @Input() showForm: boolean;
  @Output() showFormChange = new EventEmitter<boolean>();

  private selectedFile: File;
  productCopy: ProductInfo;
  close = false;
  notEquals = false;
  savedChanges = false;

  ngOnInit() {
    this.productCopy = new ProductInfo(this.product);
  }

  onFileSelect(event) {
    this.selectedFile = event.target.files[0];
  }

  saveProductInfo() {
    this.savedChanges = true;
    this.savePreviousValue(ProductInfo.isEqual(this.product, this.productCopy));
  }

  closeForm() {
    this.close = true;
    this.savePreviousValue(ProductInfo.isEqual(this.product, this.productCopy));
  }

  agreeSave(agree: boolean) {
    if (agree) {
      this.saveNewInfo.emit(this.productCopy);
    } else {
      this.saveNewInfo.emit(this.product);
    }
    this.showFormChange.emit(false);
  }

  savePreviousValue(equals) {
    if(equals) {
      this.saveNewInfo.emit(this.product);
      this.showFormChange.emit(false);
    }
  }
}
