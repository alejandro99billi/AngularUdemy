import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';

@NgModule({
declarations:[
    HeroeComponent,
    ListadoComponent],
// que cosas contienen este module

//que cosas son visibles dentro de este modulo
  exports:[
    ListadoComponent
  ],
  //van modulos dentro del imports
   imports:[CommonModule]
})
export class HeroesModule{}