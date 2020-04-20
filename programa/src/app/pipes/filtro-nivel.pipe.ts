import { Pipe, PipeTransform } from '@angular/core';
import { Nivel } from '../interfaces/interfaces';

@Pipe({
  name: 'filtroNivel'
})
export class FiltroNivelPipe implements PipeTransform {

  transform(niveles: Nivel[], texto: string): Nivel[] {
    if (texto.length === 0) {
      return niveles;
    } 

    texto = texto.toLocaleLowerCase();

    return niveles.filter( programa => {
      return  programa.nombre.toLocaleLowerCase().includes(texto) || 
              programa.descripcion.toLocaleLowerCase().includes(texto);
    });
  }
}
