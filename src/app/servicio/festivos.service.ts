import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Festivo } from '../entidades/festivo';

@Injectable({
  providedIn: 'root'
})
export class FestivosService {
  url: string;
 

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/diafestivo';
    
  }
  public validarf(fecha: Date) {
    let año = fecha.getFullYear();
    let mes = fecha.getMonth() + 1;
    let dia = fecha.getUTCDate();
    let urlT = `${this.url}/validarf/${año}/${mes}/${dia}`;

    return this.http.get(urlT, { responseType: 'text' });
  
  }

  public obtenerFestivos(año: number): Observable<Festivo[]> {
    let urlT = `${this.url}/listar/${año}`;

    return this.http.get<Festivo[]>(urlT);
  }

  
}
