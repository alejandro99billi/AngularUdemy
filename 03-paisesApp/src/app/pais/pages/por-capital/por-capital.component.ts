import { Component, OnInit } from '@angular/core';
import { Country } from '../por-pais/interfaces/pais.interface';
import { Capital } from '../por-pais/interfaces/capital.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.scss']
})
export class PorCapitalComponent implements OnInit {
  termino: string = "";
  hayError: boolean = false;
  paises: Capital[]=[]

  buscar(termino : string){
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscarPaisPorCapital(this.termino).subscribe(
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
  
  sugerencias(termino: string){
      this.hayError= false
  }
  constructor(private paisService : PaisService) { }

  ngOnInit(): void {
  }

}
