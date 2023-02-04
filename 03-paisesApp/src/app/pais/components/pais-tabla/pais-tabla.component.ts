import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../pages/por-pais/interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.scss']
})
export class PaisTablaComponent implements OnInit {
@Input() paises : Country[] = [];
  
constructor() { }

  ngOnInit(): void {
  }

}
