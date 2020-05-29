import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NivelObject } from '../interfaces/interfaces';
import { OfertaObject } from '../interfaces/ofertInterfaces';
import { delay } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { ProgramaObject } from '../interfaces/programa.model';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavController } from '@ionic/angular'
import { Registro } from '../interfaces/registro.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramasService {

  guardados: Registro[] = [];

  constructor(private http: HttpClient,
    private storage: Storage,
    private navCtrl: NavController,
    private inAppBrowser: InAppBrowser) {
    this.cargarStorage();
  }

  async cargarStorage() {
    this.guardados = await this.storage.get('registros') || [];
  }

  async guardarRegistro( format: string, text: string ) {
    await this.cargarStorage();
    const nuevoRegistro = new Registro( format, text );
    this.guardados.unshift( nuevoRegistro );
    console.log(this.guardados);
    this.storage.set('registros', this.guardados);
    this.abrirRegistro( nuevoRegistro );

  }

  abrirRegistro( registro: Registro ) {
    this.navCtrl.navigateForward('/tabs/tab2');
    switch ( registro.type ) {
      case 'http':
        this.inAppBrowser.create( registro.text, '_system' );
      break;
      case 'geo':
        this.navCtrl.navigateForward(`/tabs/tab2/mapa/${ registro.text }`);
      break;
    }
  }

  enviarCorreo() {
    const arrTemp = [];
    const titulos = 'Tipo, Formato, Creado en, Texto\n';
    arrTemp.push( titulos );
    this.guardados.forEach( registro => {
      const linea = `${ registro.type }, ${ registro.format }, ${ registro.created }, ${ registro.text.replace(',', ' ') }\n`;
      arrTemp.push( linea );
    });
  }

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

  getOfertsByIdNivel(id) {
    return this.http.get<OfertaObject>(`/oferts/nivel/${id}`);
  }

  getProgramas() {
    return this.http.get<ProgramaObject>(`/programas/`).pipe(
      delay(2500)
    );;
  }

  getProgramasFind(id) {
    return this.http.get<ProgramaObject>(`/programas/${id}`).pipe(
      delay(2500)
    );;
  }
}
