import { Component, OnInit } from '@angular/core';
import {Genders, Products} from '../module';
import {GenderService} from '../gender.service';
import {CartService} from '../cart.service';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-products-by-gender',
  templateUrl: './products-by-gender.component.html',
  styleUrls: ['./products-by-gender.component.css']
})
export class ProductsByGenderComponent implements OnInit {
  products: Products[];
  genders: Genders[];
  constructor(private genderService: GenderService,
              private cartService: CartService,
              private productService: ProductsService) { }

  ngOnInit(): void {
    this.getGenderList();
  }
  getGenderList() {
    this.genderService.getGenderList().subscribe(((genders) => {
      this.genders = genders;
    }));
  }

  getGenderProducts(id: number) {
    this.genderService.getGenderProducts(id).subscribe((products) => {
      this.products = products;
    });
  }

  deleteGender(id: number) {
    this.genders = this.genders.filter((x) => x.id !== id);
    this.genderService.deleteGender(id).subscribe(() => {
      console.log('deleted', id);
    });
  }

  addToCart(product) {
    this.cartService.addProduct(product);
    window.alert('Your product has been added to the cart!');
  }
  deleteProduct(id: number) {
    this.products = this.products.filter((x) => x.id !== id);
    this.productService.deleteProduct(id).subscribe(() => {
      console.log('deleted', id);
    });
  }
}
