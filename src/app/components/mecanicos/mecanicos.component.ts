import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MecanicosService } from '../../services/mecanicos.service';
import { Mecanico } from '../../models/mecanico.model';

@Component({
  selector: 'app-mecanicos',
  templateUrl: './mecanicos.component.html',
  styleUrls: ['./mecanicos.component.scss']
})
export class MecanicosComponent implements OnInit {
  mecanicos: Mecanico[] = [];
  editingMecanico: Mecanico | null = null;
  editForm!: FormGroup;

  especialidades = ['Motor', 'Electricidad', 'Suspensión', 'Pintura', 'General', 'Transmisión', 'Frenos'];

  constructor(
    private mecanicosService: MecanicosService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadMecanicos();
    this.initForm();
  }

  initForm(): void {
    this.editForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      especialidad: ['', Validators.required],
      salario: [0, [Validators.required, Validators.min(0)]]
    });
  }

  loadMecanicos(): void {
    this.mecanicos = this.mecanicosService.getMecanicos();
  }

  startEdit(mecanico: Mecanico): void {
    this.editingMecanico = mecanico;
    this.editForm.patchValue({
      nombre: mecanico.nombre,
      apellido: mecanico.apellido,
      telefono: mecanico.telefono,
      email: mecanico.email,
      especialidad: mecanico.especialidad,
      salario: mecanico.salario
    });
  }

  cancelEdit(): void {
    this.editingMecanico = null;
    this.editForm.reset();
  }

  saveEdit(): void {
    if (this.editForm.invalid || !this.editingMecanico) {
      return;
    }

    this.mecanicosService.updateMecanico(this.editingMecanico.id, this.editForm.value);
    this.loadMecanicos();
    this.cancelEdit();
  }

  isEditing(mecanico: Mecanico): boolean {
    return this.editingMecanico?.id === mecanico.id;
  }
}
