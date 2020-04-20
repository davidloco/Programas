import { Pipe, PipeTransform } from '@angular/core';
import { Programa } from '../interfaces/programa.model';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(programas: Programa[], texto: string): Programa[] {
    if (texto.length === 0) {
      return programas;
    } 

    texto = texto.toLocaleLowerCase();

    return programas.filter( programa => {
      return  programa.nombre.toLocaleLowerCase().includes(texto) || 
              programa.nivel_nombre.toLocaleLowerCase().includes(texto);
    });
  }

}
