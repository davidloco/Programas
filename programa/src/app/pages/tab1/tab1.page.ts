import { Component, OnInit } from '@angular/core';
import { ProgramasService } from 'src/app/services/programas.service';
import { Oferta } from 'src/app/interfaces/ofertInterfaces';
import { Nivel } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  ofertas: Oferta[] = [];
  niveles: Nivel[] = [];

  constructor(private programasServices: ProgramasService) { }

  ngOnInit() {
    this.llenarNiveles();    
  }

  cambioNivel(ev) {
    this.ofertas = [];
    this.llenarOfertas(ev.target.value);
  }

  llenarOfertas(nivel) {
    this.programasServices.getOfertsByIdNivel(nivel).subscribe(resp => {
      this.ofertas.push(...resp.oferta);
    });
  }

  llenarNiveles() {
    this.programasServices.getTopHeadlines().subscribe(resp => {
      this.niveles.push(...resp.nivel);
      this.llenarOfertas(this.niveles[0].id);
    });
    
  }
}
