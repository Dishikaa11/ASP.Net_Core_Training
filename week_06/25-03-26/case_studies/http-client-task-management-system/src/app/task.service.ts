import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from './task';

interface StorageTask {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private api = 'https://jsonplaceholder.typicode.com/todos';
  private storageKey = 'tasks';
  private tasks: Task[] = [];
  private nextTaskId: number = 1001;

  constructor(private http: HttpClient) {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    const stored = localStorage.getItem(this.storageKey);
    if (stored) {
      try {
        const storageTasks: StorageTask[] = JSON.parse(stored);
        this.tasks = storageTasks.map(t => ({...t} as Task));
      } catch (e) {
        console.error('Failed to load tasks from storage', e);
        this.tasks = [];
      }
    }
  }

  private saveToStorage(): void {
    const storageTasks: StorageTask[] = this.tasks.map(t => t as StorageTask);
    localStorage.setItem(this.storageKey, JSON.stringify(storageTasks));
  }

  getTasks(): Observable<Task[]> {
    return new Observable(observer => {
      this.http.get<Task[]>(this.api).subscribe({
        next: (apiTasks) => {
          // Merge API with local (avoid dups by id)
          const merged = [...this.tasks];
          apiTasks.forEach(apiTask => {
            if (!merged.find(t => t.id === apiTask.id)) {
              merged.push(apiTask);
            }
          });
          observer.next(merged);
          observer.complete();
        },
        error: (err) => observer.error(err)
      });
    });
  }

  getTaskById(id: number) : Observable<Task> {
    return this.http.get<Task>(`${this.api}/${id}`);

  }

  addTask(task: Task): Observable<Task>{
    return new Observable(observer => {
      this.http.post<Task>(this.api, task).subscribe({
        next: (newTask) => {
          // Override mock ID with unique client ID to avoid duplicates
          newTask.id = this.nextTaskId++;
          // Sync to local with unique id
          this.tasks.unshift(newTask);
          this.saveToStorage();
          observer.next(newTask);
          observer.complete();
        },
        error: (err) => observer.error(err)
      });
    });
  }

  updateTask(task: Task): Observable<Task>{
    return new Observable(observer => {
      this.http.put<Task>(`${this.api}/${task.id}`, task).subscribe({
        next: (updatedTask) => {
          const index = this.tasks.findIndex(t => t.id === updatedTask.id);
          if (index > -1) {
            this.tasks[index] = updatedTask;
            this.saveToStorage();
          }
          observer.next(updatedTask);
          observer.complete();
        },
        error: (err) => observer.error(err)
      });
    });
  }

  updateTaskStatus(id: number, completed: boolean): Observable<Task> {
    return this.http.patch<Task>(`${this.api}/${id}`, {
      completed: completed
    });
  }

  // GENERIC PATCH (Reusable)
  updatePartial(id: number, data: Partial<Task>): Observable<Task> {
    return this.http.patch<Task>(`${this.api}/${id}`, data);
  }

  // DELETE TASK
  deleteTask(id: number): Observable<any> {
    return new Observable(observer => {
      this.http.delete(`${this.api}/${id}`).subscribe({
        next: () => {
          this.tasks = this.tasks.filter(t => t.id !== id);
          this.saveToStorage();
          observer.next(null);
          observer.complete();
        },
        error: (err) => observer.error(err)
      });
    });
  }

  // SEARCH TASK (API filter)
  searchTasks(term: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.api}?title_list=${term}`);
  }
}
