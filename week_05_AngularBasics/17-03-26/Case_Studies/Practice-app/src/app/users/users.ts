import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class UserComponent {
  users = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
  ];
  user = {
    name: 'Alice', age : 30};
    getGreeting() {
      return 'Welcome, ' + this.user.name ;
}
}