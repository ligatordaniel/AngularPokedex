import { Component, OnInit } from '@angular/core';

import { PokeservicioService } from './../pokeservicio.service'   //Servicios....agregar

@Component({
  selector: 'app-listapokemon',
  templateUrl: './listapokemon.component.html',
  styleUrls: ['./listapokemon.component.css']
})
export class ListapokemonComponent implements OnInit {

  pokeservicio:any[];       //Servicios....llamamos el pokeservicio en pokeservicio.sercice.ts que retornamos

  constructor(private _servicio:PokeservicioService) {         //Servicios....agregar

       this.pokeservicio = _servicio.obtenerPokeService();       //Servicios....llamamos el pokeservicio en pokeservicio.sercice.ts que retornamos

  }

  ngOnInit() {
  }

}
