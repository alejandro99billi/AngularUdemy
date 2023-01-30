import { Component, Input, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {
  

  @Input('data')  personajes:any[]=[]
  constructor(private dbzService:DbzService ) { }

  get personajesS(){
    return this.dbzService.personajes
  }
  ngOnInit(): void {
  }

}
