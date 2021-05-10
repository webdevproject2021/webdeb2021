import { Component, OnInit } from '@angular/core';
import {Profiles} from '../module';
import {ProductsService} from '../products.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logged = false;
  username = '';
  password = '';
  profile: Profiles;

  ngOnInit() {
    this.getProfile(1);
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }

  constructor(private productService: ProductsService,
              private route: ActivatedRoute) {
  }
  getProfile(id: number){
    this.productService.getProfile(id).subscribe((profile) => {
      this.profile = profile;
    });
  }

  login(){
    this.productService.login(this.username, this.password).subscribe(res => {

        localStorage.setItem('token', res.token);
        this.logged = true;
        this.username = '';
        this.password = '';
      });
  }

  logout() {
    localStorage.clear();
    this.logged = false;
  }
}
