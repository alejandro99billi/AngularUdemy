
import  { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorIncreibleComponent } from './contador/contador-increible.component';

@NgModule({
    declarations: [ContadorIncreibleComponent],
    imports: [ CommonModule ],
    exports: [ContadorIncreibleComponent],
    providers: [],
})
export class ContadorModule {} 