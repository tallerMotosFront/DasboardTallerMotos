import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/task.model';
import { ChartConfiguration } from 'chart.js';
import { TasksModalComponent } from './tasks-modal.component';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {
  tasks: Task[] = [];
  
  // Estadísticas
  totalTareas = 0;
  tareasPendientes = 0;
  tareasEnProgreso = 0;
  tareasFinalizadas = 0;
  
  // Gráfico
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' },
      title: { display: true, text: 'Distribución de Tareas por Estado' }
    },
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true, ticks: { stepSize: 1 } }
    }
  };
  
  public barChartLabels = ['Pendientes', 'En progreso', 'Finalizadas'];
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: this.barChartLabels,
    datasets: [
      {
        label: 'Cantidad de tareas',
        data: [0, 0, 0],
        backgroundColor: ['#f87171', '#facc15', '#4ade80']
      }
    ]
  };

  constructor(
    private tasksService: TasksService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadTasks();
    this.calculateStatistics();
  }

  loadTasks(): void {
    this.tasks = this.tasksService.getTasks();
  }

  calculateStatistics(): void {
    this.totalTareas = this.tasks.length;
    this.tareasPendientes = this.tasks.filter(t => t.estado === 'Pendiente').length;
    this.tareasEnProgreso = this.tasks.filter(t => t.estado === 'En progreso').length;
    this.tareasFinalizadas = this.tasks.filter(t => t.estado === 'Finalizada').length;
    
    this.updateChartData();
  }

  updateChartData(): void {
    this.barChartData.datasets[0].data = [
      this.tareasPendientes,
      this.tareasEnProgreso,
      this.tareasFinalizadas
    ];
  }

  openTasksModal(): void {
    this.dialog.open(TasksModalComponent, {
      width: '900px',
      maxHeight: '90vh',
      data: { tasks: this.tasks }
    });
  }
}
