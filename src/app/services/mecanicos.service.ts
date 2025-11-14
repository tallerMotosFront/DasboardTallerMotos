import { Injectable } from '@angular/core';
import { Mecanico } from '../models/mecanico.model';

@Injectable({
  providedIn: 'root'
})
export class MecanicosService {
  private mecanicos: Mecanico[] = [
    {
      id: 1,
      nombre: 'Carlos',
      apellido: 'Gómez',
      telefono: '555-1111',
      email: 'carlos.gomez@taller.com',
      especialidad: 'Motor',
      fechaContratacion: '2023-01-10',
      salario: 35000
    },
    {
      id: 2,
      nombre: 'Ana',
      apellido: 'Torres',
      telefono: '555-2222',
      email: 'ana.torres@taller.com',
      especialidad: 'Electricidad',
      fechaContratacion: '2023-03-15',
      salario: 38000
    },
    {
      id: 3,
      nombre: 'Luis',
      apellido: 'Martínez',
      telefono: '555-3333',
      email: 'luis.martinez@taller.com',
      especialidad: 'Suspensión',
      fechaContratacion: '2023-05-20',
      salario: 36000
    },
    {
      id: 4,
      nombre: 'Sofía',
      apellido: 'Ramírez',
      telefono: '555-4444',
      email: 'sofia.ramirez@taller.com',
      especialidad: 'Pintura',
      fechaContratacion: '2023-07-12',
      salario: 34000
    },
    {
      id: 5,
      nombre: 'Roberto',
      apellido: 'Fernández',
      telefono: '555-5555',
      email: 'roberto.fernandez@taller.com',
      especialidad: 'General',
      fechaContratacion: '2023-09-01',
      salario: 33000
    }
  ];

  getMecanicos(): Mecanico[] {
    return this.mecanicos;
  }

  getMecanicoById(id: number): Mecanico | undefined {
    return this.mecanicos.find(m => m.id === id);
  }

  updateMecanico(id: number, updatedMecanico: Partial<Mecanico>) {
    const index = this.mecanicos.findIndex(m => m.id === id);
    if (index !== -1) {
      this.mecanicos[index] = { ...this.mecanicos[index], ...updatedMecanico };
    }
  }
}

