import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html'
})
export class CartComponent {

  @Input() cartItems: any[] = [];

  // ✅ ADD THESE
  @Output() inc = new EventEmitter<any>();
  @Output() dec = new EventEmitter<any>();
  @Output() remove = new EventEmitter<any>();
  @Output() clear = new EventEmitter<void>();

  getTotal() {
    return this.cartItems.reduce(
      (t, i) => t + i.price * i.quantity,
      0
    );
  }
}