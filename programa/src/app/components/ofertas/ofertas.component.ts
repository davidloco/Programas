import { Component, OnInit, Input } from '@angular/core';
import { Oferta } from 'src/app/interfaces/ofertInterfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss'],
})
export class OfertasComponent implements OnInit {

  @Input() ofertas: Oferta[] = [];
  oferta: Oferta;

  slideOpts = {
    slidesPerView: 1.1,
    freeMode: true
  }

  constructor(public router: Router) { }

  ngOnInit() {}

  abrirOferta(oferta: Oferta){
    this.router.navigate(['oferta'], { queryParams: { oferta_id: oferta.id } });
  }
}
