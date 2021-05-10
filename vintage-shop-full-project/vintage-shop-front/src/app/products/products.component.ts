import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import {Categories, Genders, Products} from '../module';
import {CartService} from '../cart.service';
import {CategoryService} from '../category.service';
import {ActivatedRoute} from '@angular/router';
import {GenderService} from '../gender.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Products[];
  categories: Categories[];
  newTitle: string;
  newBrand: string;
  newImage: string;
  newPrice: number;
  newDescription: string;
  newCategoryId: number;
  newGenderId: number;
  constructor(private productService: ProductsService,
              private route: ActivatedRoute,
              private cartService: CartService,
              private categoryService: CategoryService) {
    this.newTitle = '';
    this.newBrand = '';
    this.newImage = '';
    this.newDescription = '';
    this.newPrice = 0;
    this.newCategoryId = 1;
    this.newGenderId = 2;
  }

  ngOnInit(): void {
    this.getCategories();
  }
  getProducts() {
    this.productService.getProducts().subscribe(((products) => {
      this.products = products;
    }));
  }
  addProduct() {
    const product = {
      name: this.newTitle,
      brand: this.newBrand,
      image: this.newImage,
      price: this.newPrice,
      description: this.newDescription,
      category_id: this.newCategoryId,
      gender_id: this.newGenderId
    };
    this.productService.addProduct(product as unknown as Products).subscribe((product) => {
      this.products.unshift(product);
      this.newTitle = '';
      this.newBrand = '';
      this.newImage = '';
      this.newDescription = '';
      this.newPrice = 0;
      this.newCategoryId = 1;
      this.newGenderId = 2;
    });
    window.alert('The new product was added!');
  }

  deleteProduct(id: number) {
    this.products = this.products.filter((x) => x.id !== id);
    this.productService.deleteProduct(id).subscribe(() => {
      console.log('deleted', id);
    });
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(((categories) => {
      this.categories = categories;
    }));
  }

  getCategoryProducts(id: number) {
      this.categoryService.getCategoryProducts(id).subscribe((products) => {
        this.products = products;
      });
  }

  // addProduct() {
  //   const product = {
  //     name: this.newProduct
  //   };
  //   this.loading = false;
  //   this.productService.addProduct(product as Products).subscribe((product) => {
  //     this.products.unshift(product);
  //     this.newProduct = '';
  //     this.loading = true;
  //   });
  // }


  addToCart(product) {
    this.cartService.addProduct(product);
    window.alert('Your product has been added to the cart!');
  }

}
