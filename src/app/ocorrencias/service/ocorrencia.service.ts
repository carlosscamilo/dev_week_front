import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ocorrencia } from '../model/ocorrencia';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class OcorrenciaService {



  constructor(private http:HttpClient) { }

 
  listOcorrencia(): Observable<Ocorrencia[]>{
    const url = '/api/incidencia';
    console.log(this.http.get<Ocorrencia[]>(url));
    return this.http.get<Ocorrencia[]>(url);
  }
}
