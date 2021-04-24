import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products = [];
  constructor() {}

  viewProducts() {
    return this.products;
  }

  addProduct(product) {
    this.products.push(product);
  }

}
