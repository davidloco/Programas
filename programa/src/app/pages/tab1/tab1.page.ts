import { Component, OnInit } from '@angular/core';
import { ProgramasService } from 'src/app/services/programas.service';
import { Oferta } from 'src/app/interfaces/ofertInterfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page implements OnInit {

  ofertas: Oferta[] = [];

  constructor(private programasServices: ProgramasService) { }

  ngOnInit() {
    this.programasServices.getOferts().subscribe(resp => {
      console.log('ofertas', resp);
      this.ofertas.push(...resp.oferta);
    });
  }

  slideOpts = {
    slidesPerView: 1.1,
    freeMode: true
  }

  slideOptsPoster = {
    slidesPerView: 3.3,
    freeMOde: true
  }


}
