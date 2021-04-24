import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import {Products} from '../module';
import {CartService} from '../cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Products[];
  loading: boolean;
  newProduct: string;
  constructor(private productService: ProductsService,
              private cartService: CartService) {
    this.newProduct = '';
  }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.loading = false;
    this.productService.getProducts().subscribe(((products) => {
      this.products = products;
      this.loading = true;
    }));
  }
  addProduct() {
    const product = {
      name: this.newProduct
    };
    this.loading = false;
    this.productService.addProduct(product as Products).subscribe((product) => {
      this.products.unshift(product);
      this.newProduct = '';
      this.loading = true;
    });
  }

  deleteProduct(id: number) {
    this.products = this.products.filter((x) => x.id !== id);
    this.productService.deleteProduct(id).subscribe(() => {
      console.log('deleted', id);
    });
  }

  addToCart(product) {
    this.cartService.addProduct(product);
    window.alert('Your product has been added to the cart!');
  }

}
