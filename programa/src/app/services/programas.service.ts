import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NivelObject } from '../interfaces/interfaces';
import { OfertaObject } from '../interfaces/ofertInterfaces';
import { delay } from 'rxjs/operators';
import { ProgramaObject } from '../interfaces/programa.model';


@Injectable({
  providedIn: 'root'
})
export class ProgramasService {

  constructor(private http: HttpClient) { }

  getTopHeadlines() {
    return this.http.get<NivelObject>(`/niveles/`).pipe(
      delay(2500)
    );
  }

  getTopHeadlinesFind(search) {
    return this.http.get<NivelObject>(`/niveles/find/${search}`);
  }

  getOferts() {
    return this.http.get<OfertaObject>(`/oferts/`);
  }

  getOfertsFind(id) {
    return this.http.get<OfertaObject>(`/oferts/${id}`);
  }

  getProgramas() {
    return this.http.get<ProgramaObject>(`/programas/`);
  }

  getProgramasFind(id) {
    return this.http.get<ProgramaObject>(`/programas/${id}`);
  }
}
