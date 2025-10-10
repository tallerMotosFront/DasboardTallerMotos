import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/task.model';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public tasks: Task[] = [];

  // Tipo de gráfico
  public barChartType: ChartType = 'bar';

  // Opciones del gráfico
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' },
      title: { display: true, text: 'Tareas del Taller de Motos' }
    },
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true, ticks: { stepSize: 1 } }
    }
  };

  // Etiquetas
  public barChartLabels = ['Pendientes', 'En progreso', 'Finalizadas'];

  // Datos iniciales
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

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasks = this.tasksService.getTasks();
    this.updateChartData();
  }

  updateChartData() {
    const counts = { Pendiente: 0, 'En progreso': 0, Finalizada: 0 };

    this.tasks.forEach(task => {
      if (counts.hasOwnProperty(task.estado)) {
        counts[task.estado as keyof typeof counts];
      }
    });

    this.barChartData.datasets[0].data = [
      counts['Pendiente'],
      counts['En progreso'],
      counts['Finalizada']
    ];
  }
}
