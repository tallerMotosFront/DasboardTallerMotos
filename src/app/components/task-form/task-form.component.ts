import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  form!: FormGroup;
  editMode = false;

  estados = ['Pendiente', 'En progreso', 'Finalizada'];

  constructor(
    private fb: FormBuilder,
    private tasksService: TasksService,
    public dialogRef: MatDialogRef<TaskFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: { task?: Task }
  ) {}

  ngOnInit() {
    this.editMode = !!this.data?.task;
    this.form = this.fb.group({
      cliente: [this.data?.task?.cliente || '', Validators.required],
      placa: [this.data?.task?.placa || '', Validators.required],
      estado: [this.data?.task?.estado || 'Pendiente', Validators.required],
      mecanico: [this.data?.task?.mecanico || '', Validators.required],
      fechaLimite: [this.data?.task?.fechaLimite ? new Date(this.data.task.fechaLimite) : null, Validators.required]
    });
  }

  save() {
    if (this.form.invalid) return;
    const payload = {
      ...this.form.value,
      fechaLimite: (this.form.value.fechaLimite as Date).toISOString().slice(0,10)
    };

    if (this.editMode && this.data?.task) {
      this.tasksService.updateTask(Number(this.data.task.id), payload);
    } else {
      this.tasksService.addTask(payload);
    }
    this.dialogRef.close(true);
  }

  close() { this.dialogRef.close(false); }
}
