export interface Task {
  id: number;
  cliente: string;
  placa: string;
  modelo?: string;
  detalleServicio?: string;
  estado: 'Pendiente' | 'En progreso' | 'Finalizada';
  mecanico: string;
  fechaLimite: string;
}


