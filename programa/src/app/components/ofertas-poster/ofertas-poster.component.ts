import { Component, OnInit, Input } from '@angular/core';
import { Oferta } from 'src/app/interfaces/ofertInterfaces';
import { OfertaDetalleComponent } from '../oferta-detalle/oferta-detalle.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ofertas-poster',
  templateUrl: './ofertas-poster.component.html',
  styleUrls: ['./ofertas-poster.component.scss'],
})
export class OfertasPosterComponent implements OnInit {

  @Input() ofertas: Oferta[] = [];
  
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  slideOptsPoster = {
    slidesPerView: 3.3,
    freeMOde: true
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
