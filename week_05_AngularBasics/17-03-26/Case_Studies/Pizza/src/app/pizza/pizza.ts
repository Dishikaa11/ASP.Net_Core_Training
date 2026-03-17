import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pizza.html',
  styleUrl: './pizza.css'
})
export class PizzaComponent {
  pizzaName: string ='';
  quantity: number = 1;
  address: string='';
}