import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../por-pais/interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.scss']
})
export class PorRegionComponent  {
regiones :string[]=['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
regionActiva : string="";
paises: Country[]=[];
activarRegion(region: string){
  if(region === this.regionActiva){return;}
  this.regionActiva = region;
  this.paises = [];
  this.paisService.getPaisPorRegion(region).subscribe(paises => this.paises = paises)
}

constructor(private paisService : PaisService) { }

getClaseCss(region : string){
  return (region===this.regionActiva) ? 'btn btn-primary' :'btn btn-outline-primary';
}



}
