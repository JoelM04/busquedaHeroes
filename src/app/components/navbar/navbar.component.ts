import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  terminoBusqueda: string = '';

  constructor(private router:Router) { }

  enviarBusqueda(event: Event, termino: string) {
    event.preventDefault();
    this.router.navigate(['/heroes'], { queryParams: { terminoBusqueda: termino } });
  }
}


