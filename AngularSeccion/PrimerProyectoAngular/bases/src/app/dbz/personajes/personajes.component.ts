import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {
  

  @Input('data')  personajes:any[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}
