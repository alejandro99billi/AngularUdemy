import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';



@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MainPageComponent //devo exportar esre componente de otra forma no funzianaria
  ]
})
export class DbzModule { }
