export interface Task {
  id: number;
  cliente: string;
  placa: string;
  estado: 'Pendiente' | 'En progreso' | 'Finalizada';
  mecanico: string;
  fechaLimite: string;
}


