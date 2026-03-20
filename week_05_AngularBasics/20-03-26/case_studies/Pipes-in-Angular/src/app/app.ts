import { AsyncPipe, CommonModule, DatePipe, KeyValuePipe }  from '@angular/common';
import { Component, signal } from '@angular/core';
import { CustomcurrencyPipe } from './customcurrency-pipe';
import { of } from 'rxjs';
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, DatePipe, KeyValuePipe, CustomcurrencyPipe, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 today = new Date();

 data$ = of([
  {
    id: 1,
    productName: 'Laptop',
    price: 50000,
    status: 'Delivered'
  },
  {
    id: 2,
    productName: 'Mobile',
    price: 20000,
    status: 'Pending'
  }
 ]);

 product = {
  name: 'Laptop',
  price: 500000
 };

}
