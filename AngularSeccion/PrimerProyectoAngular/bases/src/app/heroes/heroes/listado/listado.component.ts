import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  constructor() { 
    console.log('constructor')
  }

  //EL primer ciclo d evia de  angular
  ngOnInit(): void {
    console.log('onInit')
  }

}
