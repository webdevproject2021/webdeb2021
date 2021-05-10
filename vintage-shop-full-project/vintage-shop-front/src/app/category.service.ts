import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Categories, Products} from './module';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  BASE_URL = 'http://127.0.0.1:8000';
  constructor(private client: HttpClient) { }

  getCategories(): Observable<Categories[]> {
    return this.client.get<Categories[]>(`${this.BASE_URL}/api/categories/`);
  }

  getCategory(id: number): Observable<Categories> {
    return this.client.get<Categories>(`${this.BASE_URL}/api/categories/${id}`);
  }

  getCategoryProducts(id: number): Observable<Products[]> {
    return this.client.get<Products[]>(`${this.BASE_URL}/api/categories/${id}/products/`);
  }

  addProduct(category: Categories): Observable<any> {
    return this.client.post<any>(`${this.BASE_URL}/api/categories`, category);
  }

  updateCategory(category: Categories): Observable<any> {
    return this.client.put<any>(`${this.BASE_URL}/api/categories/${category.id}`, category);
  }

  deleteCategory(id: number): Observable<any> {
    return this.client.delete<any>(`${this.BASE_URL}/api/categories/${id}`);
  }
}
