import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.scss']
})
export class PorRegionComponent implements OnInit {
regiones :string[]=['africa','americas','asia','europe','oceania'];
regionActiva : string="";

activarRegion(region: string){
  this.regionActiva = region;
}
  constructor() { }

  ngOnInit(): void {
  }

}
