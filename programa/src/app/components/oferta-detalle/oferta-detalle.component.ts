import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Oferta } from 'src/app/interfaces/ofertInterfaces';

@Component({
  selector: 'app-oferta-detalle',
  templateUrl: './oferta-detalle.component.html',
  styleUrls: ['./oferta-detalle.component.scss'],
})
export class OfertaDetalleComponent implements OnInit {

  @Input() oferta: Oferta;

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }
}
