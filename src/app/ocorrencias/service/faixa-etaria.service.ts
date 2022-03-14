import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Faixaetaria } from '../model/faixaetaria';

@Injectable({
  providedIn: 'root'
})
export class FaixaEtariaService {

  constructor(private http:HttpClient) { }
  listFaixaEtaria(): Observable<Faixaetaria[]>{
    const url = '/api/faixaetaria';
    console.log(this.http.get<Faixaetaria[]>(url));
    return this.http.get<Faixaetaria[]>(url);
  }
}
