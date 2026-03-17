import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PizzaComponent } from './pizza/pizza';

@Component({
  selector: 'app-root',
  imports: [PizzaComponent],
  template: `<app-pizza></app-pizza>`,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Pizza');
}
