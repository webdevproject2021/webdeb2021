import { Component, OnInit } from '@angular/core';
import {AuthToken} from '../module';
import {ProductsService} from '../products.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logged = false;
  username = '';
  password = '';

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }

  constructor(private productService: ProductsService) {
  }

  login(){
    this.productService.login(this.username, this.password)
      .subscribe(res => {

        localStorage.setItem('token', res.token);
        this.logged = true;
        this.username = '';
        this.password = '';
      });
  }

  logout(){
    localStorage.clear();
    this.logged = false;
  }
}
