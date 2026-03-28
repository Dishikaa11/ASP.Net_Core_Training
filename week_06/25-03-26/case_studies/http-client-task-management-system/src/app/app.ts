import { Component } from '@angular/core';
import { TaskList } from './task-list/task-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskList],
  template: `<app-task-list></app-task-list>`,
})
export class App {}