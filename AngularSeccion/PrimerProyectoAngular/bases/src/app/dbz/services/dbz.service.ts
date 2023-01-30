import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/interfaces";

@Injectable()
//1 propiedades
export class DbzService{
 private _personajes: Personaje[]=[
        {nombre:'goku',poder:20000},
        {nombre:'vegeta',poder:18500}
      ]
     //get and setter 
      get personajes(){
        return [...this._personajes]//operador ... separa los areglos
      }

constructor(){
    console.log('Service init');
}

agregarPersonje(personaje : Personaje){
      this._personajes.push(personaje);
}
}