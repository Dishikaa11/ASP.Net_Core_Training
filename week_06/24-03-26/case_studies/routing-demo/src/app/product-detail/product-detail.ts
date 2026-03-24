import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card" *ngIf="product">
      <h2>{{ product.name }}</h2>
      <p>ID: {{ product.productID }}</p>
      <p>Price: ₹{{ product.price }}</p>
    </div>

    <div *ngIf="!product">
      <p>Product not found</p>
    </div>
  `
})
export class ProductDetailComponent implements OnInit {

  product: any;

  constructor(
    private route: ActivatedRoute,
    private service: ProductService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.service.getProductById(id);
  }
}
