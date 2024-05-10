import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes:Heroe[]=[];
  terminoBusqueda: string = '';
  heroesFiltrados: any[] = [];

  constructor(private _heroeService:HeroesService, private route:ActivatedRoute, private router:Router){
    
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.terminoBusqueda = params['terminoBusqueda'] || '';
      this.actualizarListaHeroes();
    });
  }

  private actualizarListaHeroes() {
    if (this.terminoBusqueda === "") {
      this.heroes = this._heroeService.getHeroes();
    } else {
      this.heroes = this._heroeService.buscarHeroes(this.terminoBusqueda);
    }
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe', idx]);
    console.log(idx);
  }
}

export interface Heroe{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}
