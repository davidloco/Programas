import { Component, OnInit, Input } from '@angular/core';
import { Oferta } from 'src/app/interfaces/ofertInterfaces';
import { Router } from '@angular/router';
import { OfertaDetalleComponent } from '../oferta-detalle/oferta-detalle.component';
import { ModalController } from '@ionic/angular';
import { Nivel } from 'src/app/interfaces/interfaces';

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

  constructor(public router: Router, private modalCtrl: ModalController) { }

  ngOnInit() { 
    
  }

  async verDetalle(oferta: Oferta) {
    const modal = await this.modalCtrl.create({
      component: OfertaDetalleComponent,
      componentProps: {
        oferta
      }
    });
    modal.present();
  }
}
