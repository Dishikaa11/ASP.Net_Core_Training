import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { CommonModule } from '@angular/common';
import { TaskForm } from '../task-form/task-form';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskForm, FormsModule],
  templateUrl: './task-list.html',
})
export class TaskList implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }

  deleteTask(id: number) {
  this.taskService.deleteTask(id).subscribe(() => {
    
    this.tasks = this.tasks.filter(t => t.id !== id);
  });
}

updateTask(task: Task) {
  this.taskService.updateTask(task).subscribe(() => {
    console.log('Updated');
  });
}

addTaskToList(task: Task) {
  this.tasks.unshift(task); 
}

  toggleStatus(task: Task) {
  this.taskService.updateTaskStatus(task.id!, !task.completed)
    .subscribe(() => {

      
      task.completed = !task.completed;

    });
}
}