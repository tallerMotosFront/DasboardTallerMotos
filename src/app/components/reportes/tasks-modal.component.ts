import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-tasks-modal',
  templateUrl: './tasks-modal.component.html',
  styleUrls: ['./tasks-modal.component.scss']
})
export class TasksModalComponent {
  constructor(
    public dialogRef: MatDialogRef<TasksModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { tasks: Task[] }
  ) {}

  get tasks(): Task[] {
    return this.data.tasks;
  }

  getEstadoClass(estado: string): string {
    const estados: { [key: string]: string } = {
      'Pendiente': 'pendiente',
      'En progreso': 'en-progreso',
      'Finalizada': 'finalizada'
    };
    return estados[estado] || '';
  }

  close(): void {
    this.dialogRef.close();
  }
}

