import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product';
import { CartComponent } from './cart/cart';
import { CheckoutComponent } from './checkout/checkout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductComponent, CartComponent, CheckoutComponent],
  template: `
    <h1 style="text-align:center;">🛒 Smart E-Commerce App</h1>

    <app-product (add)="addToCart($event)"></app-product>

    <app-cart 
      [cartItems]="cartItems"
      (increase)="increaseQty($event)"
      (decrease)="decreaseQty($event)"
      (remove)="removeItem($event)">
    </app-cart>

    <app-checkout [cartItems]="cartItems"></app-checkout>
  `
})
export class AppComponent {

  cartItems: any[] = [];

  addToCart(product: any) {
    const existing = this.cartItems.find(p => p.id === product.id);

    if (existing) {
      existing.quantity++;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
  }

  increaseQty(item: any) {
    item.quantity++;
  }

  decreaseQty(item: any) {
    if (item.quantity > 1) item.quantity--;
  }

  removeItem(item: any) {
    this.cartItems = this.cartItems.filter(p => p !== item);
  }
}