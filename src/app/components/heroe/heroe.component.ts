import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  heroe:any={};

  constructor(private _heroesService:HeroesService, private activatedRoute:ActivatedRoute){
    this.activatedRoute.params.subscribe( params => {
      this.heroe=this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }
}
