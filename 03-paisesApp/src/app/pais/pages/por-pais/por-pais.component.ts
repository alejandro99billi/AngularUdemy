import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss']
})
export class PorPaisComponent implements OnInit {

  termino: string = "hola mundo";
  hayError: boolean = false
  constructor(private paisService : PaisService) { }

  ngOnInit(): void {
  }

buscar(){
  this.hayError = false;
  console.log(this.termino);
  this.paisService.buscarPais(this.termino).subscribe((resp) => {console.log(resp)},
  (error)=>{
 this.hayError = true;
  }
  );
}

}
