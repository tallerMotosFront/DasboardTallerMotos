import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output() closeSidebar = new EventEmitter<void>();

  constructor(private router: Router) {}

  cerrarSesion(): void {
    this.closeSidebar.emit();
    this.router.navigate(['/home']);
  }
}
