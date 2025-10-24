import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taller-dashboard';
  showDashboardLayout = false;

  constructor(private router: Router) {
    // Detectar cambios de ruta
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Extraer la ruta sin fragmentos (#) ni query params (?)
      const urlWithoutFragment = event.url.split('#')[0].split('?')[0];
      
      // Ocultar dashboard layout en home y login
      const publicRoutes = ['/', '/login'];
      this.showDashboardLayout = !publicRoutes.includes(urlWithoutFragment);
    });
  }
}