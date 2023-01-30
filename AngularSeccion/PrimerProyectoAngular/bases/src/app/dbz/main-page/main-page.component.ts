import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/interfaces';


  

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

personajes: Personaje[]=[
  {nombre:'goku',poder:20000},
  {nombre:'vegeta',poder:18500}
]

agregarNuevoPersonaje(argumento: Personaje ){
 // debugger; palabrra reservada de javascrip para usar el debbuger
  console.log('Main page component')
  console.log(argumento)
  this.personajes.push(argumento)
}
 
  constructor() { }

  ngOnInit(): void {
  }

}
