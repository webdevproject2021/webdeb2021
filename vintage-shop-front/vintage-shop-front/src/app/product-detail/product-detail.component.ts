import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Products} from '../module';
import {Location} from '@angular/common';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  numberOfLikes: number = 0;
  product: Products;
  loading: boolean;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(){
    this.route.paramMap.subscribe( (params) => {
      const id = Number(params.get('id'));
      this.loading = false;
      this.productsService.getProduct(id).subscribe((product) => {
        this.product = product;
        this.loading = true;
      });
    });
  }

  updateProduct() {
    this.loading = false;
    this.productsService.updateProduct(this.product).subscribe((product) => {
      console.log(product);
      this.loading = true;
    });
  }

  goBack(): void {
    this.location.back();
  }
  likeButtonClick() {
    this.numberOfLikes++;
  }
}
