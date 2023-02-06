import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.scss']
})
export class PaisInputComponent implements OnInit {

termino: string ='';

@Output() onEnter: EventEmitter<string> = new EventEmitter;
@Output() onDebounce : EventEmitter<string>= new EventEmitter;
@Input() label : string= '';

debouncer: Subject<string> = new Subject();
buscar(){
this.onEnter.emit(this.termino);
}
  ngOnInit(){
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor =>{
     this.onDebounce.emit(valor)
    })
  }

  teclaPresionada(){
this.debouncer.next(this.termino);
  }

  constructor() { }
}
