import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.urlImagen

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string): string {
    if (!img) {
      return `${URL}/environment.imgOriginal`;
    }
    const imegUrl = `${URL}/${img}`;
    return imegUrl;
  }

}
