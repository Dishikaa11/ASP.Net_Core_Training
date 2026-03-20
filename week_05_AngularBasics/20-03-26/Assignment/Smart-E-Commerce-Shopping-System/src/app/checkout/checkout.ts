import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.html'
})
export class CheckoutComponent {

  @Input() cartItems: any[] = [];

  user: any = {
    name: '',
    email: '',
    phone: '',
    payment: ''
  };

  // ✅ ADD THIS LINE
  addresses: string[] = [''];
}