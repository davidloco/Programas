import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen.pipe';
import { FiltroPipe } from './filtro.pipe';
import { FiltroNivelPipe } from './filtro-nivel.pipe';
import { FiltroMunicipiosPipe } from './filtro-municipios.pipe';



@NgModule({
  declarations: [ImagenPipe, FiltroPipe, FiltroNivelPipe, FiltroMunicipiosPipe],
  exports: [ImagenPipe, FiltroPipe, FiltroNivelPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
