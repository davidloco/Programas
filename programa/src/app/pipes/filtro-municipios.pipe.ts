import { Pipe, PipeTransform } from '@angular/core';
import { Oferta } from '../interfaces/ofertInterfaces';

@Pipe({
  name: 'filtroMunicipios'
})
export class FiltroMunicipiosPipe implements PipeTransform {

  transform(ofertas: Oferta[], texto: string): Oferta[] {
    if (texto.length === 0) {
      return ofertas;
    }

    texto = texto.toLocaleLowerCase();

    return ofertas.filter(oferta => {
      return  oferta.municipio.toLocaleLowerCase().includes(texto);
    });
  }

}
