import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private clientes: Cliente[] = [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Pérez',
      telefono: '555-1234',
      email: 'juan.perez@email.com',
      direccion: 'Calle Principal 123',
      fechaRegistro: '2024-01-15'
    },
    {
      id: 2,
      nombre: 'María',
      apellido: 'López',
      telefono: '555-5678',
      email: 'maria.lopez@email.com',
      direccion: 'Avenida Central 456',
      fechaRegistro: '2024-02-20'
    },
    {
      id: 3,
      nombre: 'Carlos',
      apellido: 'Gómez',
      telefono: '555-9012',
      email: 'carlos.gomez@email.com',
      direccion: 'Boulevard Norte 789',
      fechaRegistro: '2024-03-10'
    },
    {
      id: 4,
      nombre: 'Ana',
      apellido: 'Torres',
      telefono: '555-3456',
      email: 'ana.torres@email.com',
      direccion: 'Calle Sur 321',
      fechaRegistro: '2024-04-05'
    }
  ];

  getClientes(): Cliente[] {
    return this.clientes;
  }

  getClienteById(id: number): Cliente | undefined {
    return this.clientes.find(c => c.id === id);
  }

  updateCliente(id: number, updatedCliente: Partial<Cliente>) {
    const index = this.clientes.findIndex(c => c.id === id);
    if (index !== -1) {
      this.clientes[index] = { ...this.clientes[index], ...updatedCliente };
    }
  }
}

