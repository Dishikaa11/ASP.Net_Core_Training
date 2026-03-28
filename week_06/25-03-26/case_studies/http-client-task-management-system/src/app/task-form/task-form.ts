import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.html',
})
export class TaskForm {

  title: string = '';
  completed: boolean = false;

  @Output() taskAdded = new EventEmitter<Task>();

  constructor(private taskService: TaskService) {}

  addTask() {
  const newTask: Task = {
    title: this.title,
    completed: this.completed
  };

  this.taskService.addTask(newTask).subscribe((addedTask) => {
    this.taskAdded.emit(addedTask);

    this.title = '';
    this.completed = false;
  });
}
}