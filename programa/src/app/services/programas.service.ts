import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NivelObject } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProgramasService {

  constructor(private http: HttpClient) { }

  getTopHeadlines() {
    return this.http.get<NivelObject>(`/users/`);
  }

}
