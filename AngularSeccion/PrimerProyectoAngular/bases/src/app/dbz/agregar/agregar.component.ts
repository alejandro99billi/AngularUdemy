import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  nuevo: Personaje ={
    nombre: '',
    poder: 0
  }
  
 @Input() personajes: Personaje[]=[
    {nombre:'goku',poder:20000},
    {nombre:'vegeta',poder:18500}
  ]
  
  agregar(){
    // event.preventDefault();
       if(this.nuevo.nombre.trim().length === 0){
      return
       }
       this.personajes.push(this.nuevo)
       this.nuevo={
        nombre:'',
        poder:0
       }
      }
    
  constructor() { }

  ngOnInit(): void {
  }

}
