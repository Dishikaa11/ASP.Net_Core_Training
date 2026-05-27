import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductService {

  getCartItems() {
    return this.cartService.getItems();
  }


  products = [
    { id: 1, name: 'Laptop', price: 800 },
    { id: 2, name: 'Smartphone', price: 500 },
    { id: 3, name: 'Headphones', price: 150 }
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
