import { Component, OnInit } from '@angular/core';
import { Productservice } from '../product.service';  
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  products: any[ ] = [ ];

  constructor(
    private productServices: Productservice,
    private cartServices: CartService
  ) {}

  ngOnInit(): void {
    this.products = this.productServices.getProducts();
  }
  
  addToCart(product :any){
    this.cartServices.addToCart(product);
  }
}
