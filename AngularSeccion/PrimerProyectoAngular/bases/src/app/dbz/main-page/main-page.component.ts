import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/interfaces';
import { DbzService } from '../services/dbz.service';


  

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
nuevo: Personaje ={
  nombre: 'Maestro Roshi',
  poder: 1000
}
/* get personajes():Personaje[]{
  return this.dbzService.personajes
} */

personajes: Personaje[]=[]

agregarNuevoPersonaje(argumento: Personaje ){
 // debugger; palabrra reservada de javascrip para usar el debbuger
  console.log('Main page component')
  console.log(argumento)
  this.personajes.push(argumento)
}
 
  constructor(public dbzService : DbzService) {
   }

  ngOnInit(): void {
  }

}
