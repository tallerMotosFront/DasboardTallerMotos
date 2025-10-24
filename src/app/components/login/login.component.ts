import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hidePassword = true;
  isLoading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const { username, password, rememberMe } = this.loginForm.value;

    // Simulación de autenticación (reemplazar con servicio real)
    setTimeout(() => {
      // Credenciales de prueba
      if (username === 'admin@motoexpert.com' && password === '123456') {
        // Login exitoso
        this.snackBar.open('¡Inicio de sesión exitoso!', 'Cerrar', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });

        // Guardar token o datos de sesión
        if (rememberMe) {
          localStorage.setItem('rememberMe', 'true');
          localStorage.setItem('user', JSON.stringify({ username, role: 'admin' }));
        } else {
          sessionStorage.setItem('user', JSON.stringify({ username, role: 'admin' }));
        }

        // Redirigir al dashboard
        this.router.navigate(['/dashboard']);
      } else {
        // Login fallido
        this.errorMessage = 'Usuario o contraseña incorrectos';
        this.isLoading = false;
        
        this.snackBar.open('Credenciales incorrectas', 'Cerrar', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    }, 1500);
  }

  forgotPassword(): void {
    this.snackBar.open(
      'Se ha enviado un enlace de recuperación a tu correo', 
      'Cerrar', 
      {
        duration: 4000,
        panelClass: ['info-snackbar']
      }
    );
  }

  loginWithGoogle(): void {
    this.snackBar.open('Función de Google OAuth en desarrollo', 'Cerrar', {
      duration: 3000
    });
  }

  loginWithMicrosoft(): void {
    this.snackBar.open('Función de Microsoft OAuth en desarrollo', 'Cerrar', {
      duration: 3000
    });
  }

  autoFillCredentials(): void {
    this.loginForm.patchValue({
      username: 'admin@motoexpert.com',
      password: '123456'
    });

    this.snackBar.open('Credenciales autocompletadas', 'Cerrar', {
      duration: 2000,
      panelClass: ['success-snackbar']
    });
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.snackBar.open('Copiado al portapapeles', 'Cerrar', {
        duration: 2000
      });
    });
  }
}