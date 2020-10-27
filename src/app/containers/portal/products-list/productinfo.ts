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

  static isEqual(firstObj: ProductInfo, secondObj: ProductInfo):boolean {
    if (typeof firstObj !== "object" || typeof secondObj !== "object") {
      return false;
    }
    if (firstObj === undefined || secondObj === undefined) {
      return false;
    }
    if (firstObj === null || secondObj === null) {
      return false;
    }
    let firstObjKeys = Object.keys(firstObj).sort();
    let secondObjKeys = Object.keys(secondObj).sort();
    if (firstObjKeys.length !== secondObjKeys.length) {
      return false;
    }
    for (let i = 0; i < firstObjKeys.length; i++) {
      if (secondObjKeys.includes(firstObjKeys[i]) === false) {
        return false;
      }
    }
    for (let i = 0; i < firstObjKeys.length; i++) {
      if (typeof firstObj[firstObjKeys[i]] === "object") {
        return this.isEqual(firstObj[firstObjKeys[i]], secondObj[firstObjKeys[i]]);
      }
      if (firstObj[firstObjKeys[i]] !== secondObj[secondObjKeys[i]]) {
        return false;
      }
    }
    return true;
  }
}
