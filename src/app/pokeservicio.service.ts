import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeservicioService {                     


  pokeservicio:any [] = [                             // Servicio... testeo que demuestra que funciona

  {
    id:'001',
    nombre:'Bulbasour',                                                 
    imagen:'001.png',                                    
    bio:'A Bulbasaur es fácil verle echándose una siesta al sol. La semilla que tiene en el lomo va creciendo cada vez más a medida que absorbe los rayos del sol.' 
  },

  {
    id:'004',
    nombre:'Charmander',                                                 
    imagen:'004.png',                                    
    bio:'La llama que tiene en la punta de la cola arde según sus sentimientos. Llamea levemente cuando está alegre y arde vigorosamente cuando está enfadado.' 
    },
  {
    id:'007',
    nombre:'Squirtle',                                                 
    imagen:'007.png',                                    
    bio:'El caparazón de Squirtle no le sirve de protección únicamente. Su forma redondeada y las hendiduras que tiene le ayudan a deslizarse en el agua y le permiten nadar a gran velocidad.' 
    },

  {
    id:'025',
    nombre:'Pikachu',                                                 
    imagen:'025.png',                                    
    bio:'Cada vez que un Pikachu se encuentra con algo nuevo, le lanza una descarga eléctrica. Cuando se ve alguna baya chamuscada, es muy probable que sea obra de un Pikachu, ya que a veces no controlan la intensidad de la descarga.'
  }

  ]

  constructor() {
    console.log ('funciona Pokeservicio yehaaa')     // Servicio... testeo que demuestra que funciona
   }

   // Servicio... retorna todos los objetos
   obtenerPokeService(){
     return this.pokeservicio;                          
   }
   // Servicio... retorna todos los objetos



   // Servicio2... retorna solo un objeto atraves de su index
   obtenerUno(i){
     return this.pokeservicio[i];
   }
   // Servicio2... retorna solo un objeto atraves de su index
}
