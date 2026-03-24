import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { CartComponent } from './cart/cart';
import { CheckoutComponent } from './checkout/checkout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductList, CartComponent, CheckoutComponent],
  template:`
  <h1> E-Commerce App </h1>
  
  <div class="container">
  <app-product-list></app-product-list>
  <app-cart></app-cart>
<app-checkout></app-checkout>
</div>
`
 })
export class App {}
