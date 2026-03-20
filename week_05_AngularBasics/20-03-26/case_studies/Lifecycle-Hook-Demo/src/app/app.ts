import { Component } from '@angular/core';
import { OrderParent } from './order-parent/order-parent';  // ✅ import this

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [OrderParent],  // ✅ ADD THIS
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
}