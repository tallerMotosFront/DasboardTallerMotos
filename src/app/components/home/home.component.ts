import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentFormComponent } from '../appointment-form/appointment-form.component';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({ opacity: 0, transform: 'translateX(-100px)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  mobileMenuOpen = false;
  currentNewsIndex = 0;

  services = [
    {
      icon: 'build',
      title: 'Mantenimiento Preventivo',
      description: 'Cambio de aceite, filtros, ajustes y revisión completa de tu moto.',
      price: 80000,
      color: '#2196F3'
    },
    {
      icon: 'engineering',
      title: 'Reparación de Motor',
      description: 'Diagnóstico y reparación especializada de motores de todo tipo.',
      price: 250000,
      color: '#FF9800'
    },
    {
      icon: 'electrical_services',
      title: 'Sistema Eléctrico',
      description: 'Reparación de luces, batería, alternador y sistema de encendido.',
      price: 120000,
      color: '#4CAF50'
    },
    {
      icon: 'settings',
      title: 'Frenos y Suspensión',
      description: 'Cambio de pastillas, discos y mantenimiento de suspensión.',
      price: 150000,
      color: '#F44336'
    },
    {
      icon: 'search',
      title: 'Diagnóstico Computarizado',
      description: 'Escaneo completo con equipos de última generación.',
      price: 50000,
      color: '#9C27B0'
    },
    {
      icon: 'inventory_2',
      title: 'Venta de Repuestos',
      description: 'Repuestos originales y alternativos de alta calidad.',
      price: 0,
      color: '#00BCD4'
    }
  ];

  features = [
    {
      icon: 'verified_user',
      title: 'Garantía en Trabajos',
      description: '6 meses de garantía en todos nuestros servicios'
    },
    {
      icon: 'groups',
      title: 'Mecánicos Certificados',
      description: 'Personal capacitado y con años de experiencia'
    },
    {
      icon: 'speed',
      title: 'Servicio Rápido',
      description: 'Entregas en 24-48 horas para servicios básicos'
    },
    {
      icon: 'payment',
      title: 'Precios Justos',
      description: 'Los mejores precios del mercado sin sacrificar calidad'
    }
  ];

  newsArticles = [
    {
      image: 'https://andromedamoto.com/cdn/shop/articles/segway-apex-h2-1200_ea67c74e-59ec-4e56-8465-2f8fe69e481c.jpg?v=1746782717',
      title: 'Nueva Generación de Motos Eléctricas 2025',
      excerpt: 'Las motos eléctricas están revolucionando el mercado con mayor autonomía y mejor rendimiento.',
      date: '15 Ene 2025'
    },
    {
      image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80',
      title: 'Consejos para el Mantenimiento en Temporada de Lluvias',
      excerpt: 'Aprende cómo cuidar tu moto durante la temporada húmeda y evitar daños costosos.',
      date: '10 Ene 2025'
    },
    {
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80',
      title: 'Las Mejores Rutas Moteras en Colombia',
      excerpt: 'Descubre los recorridos más espectaculares para disfrutar sobre dos ruedas.',
      date: '5 Ene 2025'
    },
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      title: 'Tecnología Antibloqueo ABS: ¿Por qué es Importante?',
      excerpt: 'Conoce los beneficios del sistema ABS y cómo puede salvarte la vida.',
      date: '28 Dic 2024'
    }
  ];

  galleryItems = [
    { url: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=600&q=80', title: 'Mantenimiento Completo', category: 'Servicio' },
    { url: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80', title: 'Reparación de Motor', category: 'Mecánica' },
    { url: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80', title: 'Pintura Personalizada', category: 'Estética' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8wdpH5le7sMgcWw5p8u_Wn8CHZQuq-s5GQ&s', title: 'Instalación Eléctrica', category: 'Electrónica' },
    { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', title: 'Suspensión Ajustada', category: 'Performance' },
    { url: 'https://blog.reparacion-vehiculos.es/hs-fs/hubfs/portada_diagnosis_moto_iStock-1019948752_opt.jpg?width=571&name=portada_diagnosis_moto_iStock-1019948752_opt.jpg', title: 'Diagnóstico Digital', category: 'Tecnología' }
  ];

  testimonials = [
    {
      name: 'Carlos Rodríguez',
      avatar: 'https://i.pravatar.cc/150?img=12',
      text: 'Excelente servicio, muy profesionales y rápidos. Mi moto quedó como nueva después del mantenimiento.',
      bike: 'Yamaha R3'
    },
    {
      name: 'María González',
      avatar: 'https://i.pravatar.cc/150?img=45',
      text: 'Los mejores precios y atención personalizada. Siempre traigo mi moto aquí, son muy confiables.',
      bike: 'Honda CB 190'
    },
    {
      name: 'Juan Martínez',
      avatar: 'https://i.pravatar.cc/150?img=33',
      text: 'Me solucionaron un problema complejo que nadie más pudo. Mecánicos muy capacitados.',
      bike: 'Kawasaki Z400'
    }
  ];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    // Auto-rotate news carousel
    setInterval(() => {
      this.nextNews();
    }, 5000);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  scrollTo(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openAppointmentDialog(): void {
    this.dialog.open(AppointmentFormComponent, {
      width: '600px',
      maxWidth: '95vw'
    });
  }

  nextNews(): void {
    this.currentNewsIndex = (this.currentNewsIndex + 1) % this.newsArticles.length;
  }

  previousNews(): void {
    this.currentNewsIndex = this.currentNewsIndex === 0 
      ? this.newsArticles.length - 1 
      : this.currentNewsIndex - 1;
  }

  goToNews(index: number): void {
    this.currentNewsIndex = index;
  }

  getVisibleNews() {
    // Show 3 news at a time
    const news = [];
    for (let i = 0; i < 3; i++) {
      const index = (this.currentNewsIndex + i) % this.newsArticles.length;
      news.push(this.newsArticles[index]);
    }
    return news;
  }
}