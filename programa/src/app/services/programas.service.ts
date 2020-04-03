import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NivelObject } from '../interfaces/interfaces';
import { OfertaObject } from '../interfaces/ofertInterfaces';


@Injectable({
  providedIn: 'root'
})
export class ProgramasService {

  constructor(private http: HttpClient) { }

  getTopHeadlines() {
    return this.http.get<NivelObject>(`/users/`);
  }

  getTopHeadlinesFind(search) {
    return this.http.get<NivelObject>(`/users/find/` + search);
  }

  getOferts() {
    return this.http.get<OfertaObject>(`/oferts/`);
  }
}
