import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v3.1";
  // private apiUrl2: string = "https://restcountries.com/v2";

  get httParams(){
    return new HttpParams(). set('fields', 'name,capital,cca2,flags,population');
  }
  

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Pais[]>{
    const url=  `${this.apiUrl}/name/${termino}`;
    return this.http.get<Pais[]>(url, {params: this.httParams});
  }
  
  buscarCapital(termino: string): Observable<Pais[]>{
    const url=  `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Pais[]>(url, {params: this.httParams});
  }

  obtenerPaisPorCodigo(id: string): Observable<Pais>{
    const url=  `${this.apiUrl}/alpha?codes=${id}`;
    return this.http.get<Pais>(url);
  }

  buscarRegion(region: string): Observable<Pais[]>{
    const url=  `${this.apiUrl}/region/${region}`;
    return this.http.get<Pais[]>(url, {params: this.httParams});
  }


}
