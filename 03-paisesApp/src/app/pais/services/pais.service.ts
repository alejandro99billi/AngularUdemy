import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Capital } from '../pages/por-pais/interfaces/capital.interface';
import { Country } from '../pages/por-pais/interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  
  private apiUrl: string = 'https://restcountries.com/v2/';
  private apiUrlCapital: string = 'https://restcountries.com/v2/'

  constructor(private http:HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
     return this.http.get<Country[]>(url)/* .pipe(
      catchError(err=> of([]))
     ); */
  }

  buscarPaisPorCapital(termino: string):Observable<Capital[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Capital[]>(url)
  }

  getPaisPorId(id: string){
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url)
  }
}
