import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.html'
})
export class ProductComponent {

  @Output() add = new EventEmitter<any>();

  search = '';
  category = '';

  products = [
    {
      id: 1,
      name: 'Laptop',
      price: 50000,
      category: 'Electronics',
      rating: 4,
      image: 'https://via.placeholder.com/120',
      quantity: 1
    },
    {
      id: 2,
      name: 'Phone',
      price: 20000,
      category: 'Electronics',
      rating: 5,
      image: 'https://via.placeholder.com/120',
      quantity: 1
    },
    {
      id: 3,
      name: 'Shoes',
      price: 3000,
      category: 'Fashion',
      rating: 3,
      image: 'https://via.placeholder.com/120',
      quantity: 1
    }
  ];

  get filtered() {
    return this.products.filter(p =>
      p.name.toLowerCase().includes(this.search.toLowerCase()) &&
      (this.category === '' || p.category === this.category)
    );
  }

  getStars(rating: number) {
    return '⭐'.repeat(rating);
  }
}