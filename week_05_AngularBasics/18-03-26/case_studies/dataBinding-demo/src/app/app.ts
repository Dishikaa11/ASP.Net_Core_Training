import { Component, signal } from '@angular/core';
import {FormsModule } from '@angular/forms';
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //DATA
  productName = 'Laptop';
  price = 50000;
  quantity = 1;
  isAvailable = true;

  imageURL = 'https://share.google/9cGDJhjl4rqmYv6r1';
//Two WAy binding fields
  customerName = '';
  address = '';

  //Method(Event Binding)
  increaseQty(){
    this.quantity++;
  }

  decreaseQty(){
    if (this.quantity > 1) this.quantity--;
  }

  toggleAvailability(){
    this.isAvailable = !this.isAvailable;
  }

  //toggleButton(){
 // this.isDisabled = this.isDisabled
 //}
  //protected readonly title = signal('dataBinding-demo');


  getTotal(){
    return this.price * this.quantity;
  }
}
