export class ProductInfo {
  name: string;
  description: string;
  price: number;
  imageLink: string;

  constructor(productInfo: ProductInfo) {
    this.name = productInfo ? productInfo.name : null;
    this.description = productInfo ? productInfo.description : null;
    this.price = productInfo ? productInfo.price : null;
    this.imageLink = productInfo ? productInfo.imageLink : null;
  }
}
