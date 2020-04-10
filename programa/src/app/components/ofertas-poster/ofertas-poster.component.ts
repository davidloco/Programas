import { Component, OnInit, Input } from '@angular/core';
import { Oferta } from 'src/app/interfaces/ofertInterfaces';

@Component({
  selector: 'app-ofertas-poster',
  templateUrl: './ofertas-poster.component.html',
  styleUrls: ['./ofertas-poster.component.scss'],
})
export class OfertasPosterComponent implements OnInit {

  @Input() ofertas: Oferta[] = [];
  
  constructor() { }

  ngOnInit() {}

  slideOptsPoster = {
    slidesPerView: 3.3,
    freeMOde: true
  }
}
