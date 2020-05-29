import { Component, OnInit, Input } from '@angular/core';
import { Nivel } from 'src/app/interfaces/interfaces';
import { DataLocalService } from 'src/app/services/data-local.service';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Programa } from 'src/app/interfaces/programa.model';
import { ProgramaDetalleComponent } from '../programa-detalle/programa-detalle.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programa',
  templateUrl: './programa.component.html',
  styleUrls: ['./programa.component.scss'],
})
export class ProgramaComponent implements OnInit {

  @Input() programa: Programa;
  @Input() indice: number;
  @Input() enFavoritos;

  constructor( private iab: InAppBrowser,
               private actionSheetCtrl: ActionSheetController,
               //private socialSharing: SocialSharing,
               public datalocalService: DataLocalService,
               public router: Router, 
               private modalCtrl: ModalController) { }

  ngOnInit() {}

  abrirPrograma() {
    const browser = this.iab.create(this.programa.nombre, '_system');
  }

  async verDetalle(programa: Programa) {
    const modal = await this.modalCtrl.create({
      component: ProgramaDetalleComponent,
      componentProps: {
        programa
      }
    });
    modal.present();
  }

  async lanzarMenu() {

    let guardarBorrarBtn;

    if ( this.enFavoritos ) {

      guardarBorrarBtn = {
        text: 'Borrar Favorito',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Borrar de favorito');
          this.datalocalService.borrarPrograma( this.programa );
        }
      };

    } else {

      guardarBorrarBtn = {
        text: 'Favorito',
        icon: 'star',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Favorito');
          this.datalocalService.guardarPrograma( this.programa );
        }
      };

    }

    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Compartir',
          icon: 'share',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Share clicked');
            
        }
      },
      guardarBorrarBtn,
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });

    await actionSheet.present();

  }

}
