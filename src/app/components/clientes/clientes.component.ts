import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  editingCliente: Cliente | null = null;
  editForm!: FormGroup;

  constructor(
    private clientesService: ClientesService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadClientes();
    this.initForm();
  }

  initForm(): void {
    this.editForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      direccion: ['', Validators.required]
    });
  }

  loadClientes(): void {
    this.clientes = this.clientesService.getClientes();
  }

  startEdit(cliente: Cliente): void {
    this.editingCliente = cliente;
    this.editForm.patchValue({
      nombre: cliente.nombre,
      apellido: cliente.apellido,
      telefono: cliente.telefono,
      email: cliente.email,
      direccion: cliente.direccion
    });
  }

  cancelEdit(): void {
    this.editingCliente = null;
    this.editForm.reset();
  }

  saveEdit(): void {
    if (this.editForm.invalid || !this.editingCliente) {
      return;
    }

    this.clientesService.updateCliente(this.editingCliente.id, this.editForm.value);
    this.loadClientes();
    this.cancelEdit();
  }

  isEditing(cliente: Cliente): boolean {
    return this.editingCliente?.id === cliente.id;
  }
}
