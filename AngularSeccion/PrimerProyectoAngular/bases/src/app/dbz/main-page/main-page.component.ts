import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/interfaces';


  

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
nuevo: Personaje ={
  nombre: '',
  poder: 0
}

personajes: Personaje[]=[
  {nombre:'goku',poder:20000},
  {nombre:'vegeta',poder:18500}
]

 
 
  constructor() { }

  ngOnInit(): void {
  }

}
