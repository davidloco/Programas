import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Programa } from 'src/app/interfaces/programa.model';

@Component({
  selector: 'app-programa-detalle',
  templateUrl: './programa-detalle.component.html',
  styleUrls: ['./programa-detalle.component.scss'],
})
export class ProgramaDetalleComponent implements OnInit {

  @Input() programa: Programa;

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }
}
