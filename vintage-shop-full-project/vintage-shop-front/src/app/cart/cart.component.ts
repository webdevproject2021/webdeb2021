import {Component} from '@angular/core';
import { CartService } from '../cart.service';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  logged = false;
  username = '';
  password = '';
  products = this.cartService.viewProducts();

  constructor(
    private cartService: CartService,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }

  login(){
    this.productService.login(this.username, this.password).subscribe(data => {
        localStorage.setItem('token', data.token);
        this.logged = true;
        this.username = '';
        this.password = '';
      });
  }

  logout(){
    this.logged = false;
    localStorage.removeItem('token');
  }
}
