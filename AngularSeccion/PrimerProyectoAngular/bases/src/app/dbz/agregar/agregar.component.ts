import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  @Input() nuevo: Personaje ={
    nombre: '',
    poder: 0
  }
  
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); 
 
 
  
  agregar(){
    // event.preventDefault();
       if(this.nuevo.nombre.trim().length === 0){
      return
       }
       
       this.onNuevoPersonaje.emit(this.nuevo)
       this.nuevo={
        nombre:'',
        poder:0
       }
      }
    
  constructor() { }

  ngOnInit(): void {
  }

}
