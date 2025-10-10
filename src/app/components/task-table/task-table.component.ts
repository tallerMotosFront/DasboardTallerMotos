import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/task.model';


@Component({
  selector: 'app-tasks-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TasksTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'cliente', 'placa', 'mecanico', 'estado', 'fechaLimite', 'acciones'];
  dataSource = new MatTableDataSource<Task>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.dataSource.data = this.tasksService.getTasks();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  deleteTask(id: number): void {
    this.tasksService.deleteTask(id);
    this.loadTasks();
  }
}

