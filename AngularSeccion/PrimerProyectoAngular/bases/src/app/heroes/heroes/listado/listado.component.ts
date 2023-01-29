import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  heroeCancelado:string='';
  heroes: string[]= ['spiderman', 'thor','ant-mant'] 
  borrarHeroe():void{
   this.heroeCancelado =  this.heroes.shift() || '';
  }
  constructor() { 
    console.log('constructor')
  }

  //EL primer ciclo d evia de  angular
  ngOnInit(): void {
    console.log('onInit')
  }

}
