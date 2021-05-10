import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {AuthToken, Products, Profiles} from './module';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  BASE_URL = 'http://127.0.0.1:8000';
  constructor(private client: HttpClient) { }

  getProducts(): Observable<Products[]> {
    return this.client.get<Products[]>(`${this.BASE_URL}/api/products/`);
  }

  getProduct(id: number): Observable<Products> {
    return this.client.get<Products>(`${this.BASE_URL}/api/products/${id}`);
  }

  addProduct(product: Products): Observable<any> {
    return this.client.post<any>(`${this.BASE_URL}/api/products/`, product);
  }

  updateProduct(product: Products): Observable<any> {
    return this.client.put<any>(`${this.BASE_URL}/api/products/${product.id}/`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.client.delete<any>(`${this.BASE_URL}/api/products/${id}/`);
  }
  login(username, password): Observable<AuthToken> {
    return this.client.post<AuthToken>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    });
  }

  getProfile(id: number): Observable<Profiles> {
    return this.client.get<Profiles>(`${this.BASE_URL}/api/profiles/${id}`);
  }
}
