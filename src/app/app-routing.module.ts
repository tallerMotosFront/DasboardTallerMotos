import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TasksTableComponent } from './components/task-table/task-table.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tareas', component: TasksTableComponent },
  { path: 'reportes', component: DashboardComponent },
  { path: 'formulario', component: TaskFormComponent },
  { path: 'home', component: HomeComponent }
  // puedes seguir agregando más vistas aquí
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
