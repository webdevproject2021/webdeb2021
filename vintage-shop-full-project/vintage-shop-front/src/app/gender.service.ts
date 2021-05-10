import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Genders, Products} from './module';

@Injectable({
  providedIn: 'root'
})
export class GenderService {
  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private client: HttpClient) {
  }

  getGenderList(): Observable<Genders[]> {
    return this.client.get<Genders[]>(`${this.BASE_URL}/api/genders/`);
  }

  getGender(id: number): Observable<Genders> {
    return this.client.get<Genders>(`${this.BASE_URL}/api/genders/${id}`);
  }

  getGenderProducts(id: number): Observable<Products[]> {
    return this.client.get<Products[]>(`${this.BASE_URL}/api/genders/${id}/products/`);
  }

  updateGender(gender: Genders): Observable<any> {
    return this.client.put<any>(`${this.BASE_URL}/api/genders/${gender.id}`, gender);
  }

  deleteGender(id: number): Observable<any> {
    return this.client.delete<any>(`${this.BASE_URL}/api/genders/${id}`);
  }
}
