import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
 public title: string= 'Contador App'; //podemos imprimir el codigo con las {{}} y podemos meter cualquier codigo d ejava scrip
base: number = 5;
 numero: number= 10;
/* 
  sumar(){
    this.numero +=1
  }

  restar(){
    this.numero -=1
  } */
  
  acumular(valor:number){
    this.numero += valor
  }


}
//tempalteUrl podemos especificar el path para mostrar la informacion del archivo
//template:'para scrivir elementos de html'