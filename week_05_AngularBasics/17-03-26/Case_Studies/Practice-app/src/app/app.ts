import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';



import { HomeComponent } from './home/home';
import { ProductComponent } from './product/product';
import { UserComponent } from './users/users';

@Component({
  selector: 'app-root',
  imports: [HomeComponent,ProductComponent,UserComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('My-Angular-First-App');
}
