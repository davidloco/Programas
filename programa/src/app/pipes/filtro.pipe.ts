import { Pipe, PipeTransform } from '@angular/core';
import { Nivel } from '../interfaces/interfaces';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(niveles: Nivel[], texto: string): Nivel[] {
    if (texto.length === 0) {
      return niveles;
    } 

    texto = texto.toLocaleLowerCase();

    return niveles.filter( nivel => {
      return  nivel.nombre.toLocaleLowerCase().includes(texto) || 
              nivel.descripcion.toLocaleLowerCase().includes(texto);
    });
  }

}
