import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {

  constructor(private cartService: CartService) {}

  getCartItems() {
    return this.cartService.getItems();
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }
}
