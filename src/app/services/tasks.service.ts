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
      modelo: 'Yamaha R3',
      detalleServicio: 'Cambio de aceite y filtro, revisión general',
      mecanico: 'Carlos Gómez',
      estado: 'Pendiente',
      fechaLimite: '2025-10-15'
    },
    {
      id: 2,
      cliente: 'María López',
      placa: 'XYZ987',
      modelo: 'Honda CBR 600',
      detalleServicio: 'Reparación de frenos delanteros y traseros',
      mecanico: 'Ana Torres',
      estado: 'En progreso',
      fechaLimite: '2025-10-20'
    },
    {
      id: 3,
      cliente: 'Carlos Rodríguez',
      placa: 'DEF456',
      modelo: 'Kawasaki Ninja 650',
      detalleServicio: 'Mantenimiento completo, cambio de neumáticos',
      mecanico: 'Luis Martínez',
      estado: 'Finalizada',
      fechaLimite: '2025-10-10'
    },
    {
      id: 4,
      cliente: 'Ana García',
      placa: 'GHI789',
      modelo: 'Suzuki GSX-R 750',
      detalleServicio: 'Reparación de sistema eléctrico',
      mecanico: 'Sofía Ramírez',
      estado: 'Pendiente',
      fechaLimite: '2025-10-25'
    },
    {
      id: 5,
      cliente: 'Roberto Fernández',
      placa: 'JKL012',
      modelo: 'Ducati Monster 696',
      detalleServicio: 'Alineación y balanceo, revisión de suspensión',
      mecanico: 'Roberto Fernández',
      estado: 'En progreso',
      fechaLimite: '2025-10-18'
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

