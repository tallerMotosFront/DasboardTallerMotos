import { Component } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-tasks-chart',
  templateUrl: './tasks-chart.component.html',
  styleUrls: ['./tasks-chart.component.scss']
})
export class TasksChartComponent {
  public chartType: ChartType = 'bar';

  public chartData: ChartConfiguration['data'] = {
    labels: ['Pendientes', 'En progreso', 'Completadas'],
    datasets: [
      {
        label: 'Tareas',
        data: [5, 9, 14],
        backgroundColor: ['#FFC107', '#03A9F4', '#4CAF50']
      }
    ]
  };

  public chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' },
      title: { display: true, text: 'Estado de las Tareas' }
    }
  };
}

