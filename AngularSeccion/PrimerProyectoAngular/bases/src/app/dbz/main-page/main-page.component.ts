import { Component, OnInit } from '@angular/core';


  
interface Personaje{
  nombre: string,
  poder: number
}
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
