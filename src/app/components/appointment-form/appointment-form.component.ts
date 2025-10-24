import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit {
  appointmentForm!: FormGroup;
  isSubmitting = false;
  minDate = new Date();

  marcas = [
    'Honda',
    'Yamaha',
    'Suzuki',
    'Kawasaki',
    'Bajaj',
    'TVS',
    'KTM',
    'BMW',
    'Ducati',
    'Harley Davidson',
    'Royal Enfield',
    'AKT',
    'Auteco',
    'Otra'
  ];

  servicios = [
    'Mantenimiento Preventivo',
    'Cambio de Aceite',
    'Revisión de Frenos',
    'Afinación de Motor',
    'Revisión Eléctrica',
    'Cambio de Llantas',
    'Reparación de Suspensión',
    'Diagnóstico Computarizado',
    'Lavado y Engrase',
    'Sincronización',
    'Reparación General',
    'Otro'
  ];

  horas = [
    '08:00 AM',
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM'
  ];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AppointmentFormComponent>,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      // Información Personal
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],

      // Información de la Moto
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      anio: ['', [Validators.required, Validators.min(1980), Validators.max(new Date().getFullYear() + 1)]],
      placa: ['', Validators.required],
      kilometraje: ['', [Validators.required, Validators.min(0)]],

      // Detalles del Servicio
      tipoServicio: [[], Validators.required],
      fechaPreferida: ['', Validators.required],
      horaPreferida: ['', Validators.required],
      descripcion: ['', [Validators.maxLength(500)]],
      urgencia: ['media', Validators.required],

      // Información Adicional
      requiereRecogida: [false],
      direccionRecogida: [''],
      aceptaTerminos: [false, Validators.requiredTrue]
    });

    // Agregar validación condicional para dirección de recogida
    this.appointmentForm.get('requiereRecogida')?.valueChanges.subscribe(value => {
      const direccionControl = this.appointmentForm.get('direccionRecogida');
      if (value) {
        direccionControl?.setValidators([Validators.required]);
      } else {
        direccionControl?.clearValidators();
      }
      direccionControl?.updateValueAndValidity();
    });
  }

  submitAppointment(): void {
    if (this.appointmentForm.invalid) {
      this.snackBar.open('Por favor completa todos los campos requeridos', 'Cerrar', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
      return;
    }

    this.isSubmitting = true;

    // Simular envío de formulario (aquí irían las llamadas al backend)
    setTimeout(() => {
      console.log('Datos de la cita:', this.appointmentForm.value);
      
      this.snackBar.open(
        '¡Cita agendada exitosamente! Te contactaremos pronto para confirmar.', 
        'Cerrar', 
        {
          duration: 5000,
          panelClass: ['success-snackbar']
        }
      );

      this.isSubmitting = false;
      this.dialogRef.close(this.appointmentForm.value);
    }, 2000);
  }
}