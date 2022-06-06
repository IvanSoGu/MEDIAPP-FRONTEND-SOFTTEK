import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConsultaListaAnaliticaDTO } from '../_modulo/consultaListaAnaliticaDTO';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  private url: string = `${environment.HOST}/consultas`;
  
  constructor(
    private http: HttpClient
  ) { }

  listarResumen() {
    return this.http.get<any[]>(`${this.url}/listarResumen`);
  }

  generarReporte(){
    return this.http.get(`${this.url}/generarReporte`, {responseType: 'blob'})
  }

  registrarTransaccion(consultaDTO: ConsultaListaAnaliticaDTO){
    console.log(consultaDTO);
    return this.http.post(this.url, consultaDTO); 
}
}
