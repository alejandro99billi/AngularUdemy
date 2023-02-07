import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from './interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss']
})
export class PorPaisComponent implements OnInit {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[]=[];
  paisesSugeridos: Country[]=[];
  mostrarSugerencias: boolean = false;
  constructor(private paisService : PaisService) { }

  ngOnInit(): void {
  }

buscar(termino : string){
  this.mostrarSugerencias = false;
  this.termino = termino;
  this.hayError = false;
  this.paisService.buscarPais(this.termino).subscribe(
    (paises) => {console.log(paises)
      this.paises = paises
    }

  ,
  (error)=>{
 this.hayError = true;
 this.paises= [];
  }
  );
}


buscarSugerido(termino : string){
   this.buscar(termino);
  
}

sugerencias(termino: string){
    this.hayError= false

    this.paisService.buscarPais(termino).subscribe(paises => this.paisesSugeridos = paises.splice(0,5) ,  (err)=> this.paisesSugeridos=[])
   
}

}
