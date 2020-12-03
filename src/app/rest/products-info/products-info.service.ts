import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ProductInfo } from './productinfo';
import { productsInfo } from './product-info';

@Injectable()
export class ProductsInfoService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductInfo[]> {
    return this.http.get<ProductInfo[]>('/products')
      .pipe(() => of(productsInfo))
  }

  getProduct(id: number): Observable<ProductInfo> {
    return this.http.get<ProductInfo>(`/products/${id}`)
      .pipe(() => of(productsInfo[id]))
  }

  addProduct(product: ProductInfo): Observable<string> {
    return this.http.post<string>('/products', {
      name: product.name,
      description: product.description,
      price: product.price,
      imageLink: product.imageLink
    }).pipe(() => {
      productsInfo.push(product);
      return of("Продукт был успешно добавлен");
    })
  }

  updateProduct(id: number, product: ProductInfo): Observable<string> {
    return this.http.put<string>(`/products/${id}`, {
      name: product.name,
      description: product.description,
      price: product.price,
      imageLink: product.imageLink
    }).pipe(() => {
      productsInfo[id] = product;
      return of("Информация о продукте успешно сохранена");
    })
  }

  deleteProduct(id: number): Observable<string> {
    return this.http.delete(`/products/${id}`)
      .pipe(() => {
        productsInfo.splice(id, 1);
        return of("Продукт был успешно удален");
      })
  }
}
