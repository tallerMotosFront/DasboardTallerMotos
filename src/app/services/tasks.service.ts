import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: Task[] = [
    {
      id: 1,
      cliente: 'Juan Pérez',
      placa: 'ABC123',
      mecanico: 'Carlos Gómez',
      estado: 'Pendiente',
      fechaLimite: '2025-10-15'
    },
    {
      id: 2,
      cliente: 'María López',
      placa: 'XYZ987',
      mecanico: 'Ana Torres',
      estado: 'En progreso',
      fechaLimite: '2025-10-20'
    }
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Omit<Task, 'id'>) {
    const newTask: Task = {
      ...task,
      id: this.tasks.length ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1
    };
    this.tasks.push(newTask);
  }

  updateTask(id: number, updatedTask: Partial<Task>) {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index !== -1) {
      this.tasks[index] = { ...this.tasks[index], ...updatedTask };
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}

/* cambio para conectar con  el back.
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

constructor(private http: HttpClient) {}

getTasks(): Observable<Task[]> {
  return this.http.get<Task[]>('http://localhost:3000/tasks');
}
*/

