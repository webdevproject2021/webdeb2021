import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {AuthToken, Products} from './module';
import {PRODUCTS} from './products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  BASE_URL = 'http://localhost:3000';
  constructor(private client: HttpClient) { }

  getProducts(): Observable<Products[]> {
    return this.client.get<Products[]>(`${this.BASE_URL}/products`);
  }

  getProduct(id: number): Observable<Products> {
    const product = PRODUCTS.find((x) => x.id === id);
    return this.client.get<Products>(`${this.BASE_URL}/products/${id}`);
  }

  addProduct(product: Products): Observable<any> {
    return this.client.post<any>(`${this.BASE_URL}/products`, product);
  }

  updateProduct(product: Products): Observable<any> {
    return this.client.put<any>(`${this.BASE_URL}/products/${product.id}`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.client.delete<any>(`${this.BASE_URL}/products/${id}`);
  }
  login(username, password): Observable<AuthToken> {
    return this.client.post<AuthToken>(`${this.BASE_URL}/login/`, {
      username,
      password
    });
  }
}
