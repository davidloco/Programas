import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Nivel } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  programas: Nivel[] = [];

  constructor(private storage: Storage,
    public toastController: ToastController) {
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500
    });
    toast.present();
  }


  guardarPrograma(programa: Nivel) {

    const existe = this.programas.find(prog => prog.nombre === programa.nombre);

    if (!existe) {
      this.programas.unshift(programa);
      this.storage.set('favoritos', programa);
    }

    this.presentToast('Agregado a favorito');
  }

  async cargarFavoritos() {
    const favoritos = await this.storage.get('favoritos');

    if (favoritos) {
      this.programas = favoritos;
    }
  }

  borrarPrograma(programa: Nivel) {
    this.programas = this.programas.filter(prog => prog.nombre !== programa.nombre);
    this.storage.set('favoritos', this.programas);
    this.presentToast('Borrado de favoritos');
  }

}
