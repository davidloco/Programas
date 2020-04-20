import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { ProgramaComponent } from './programa/programa.component';
import { ProgramasComponent } from './programas/programas.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { OfertasPosterComponent } from './ofertas-poster/ofertas-poster.component';
import { FooterInscribirseComponent } from './footer-inscribirse/footer-inscribirse.component';
import { NivelesComponent } from './niveles/niveles.component';
import { NivelComponent } from './nivel/nivel.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ProgramaComponent,
    ProgramasComponent,
    OfertasPosterComponent,
    OfertasComponent,
    FooterInscribirseComponent,
    NivelComponent,
    NivelesComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ProgramasComponent,
    NivelesComponent,
    OfertasPosterComponent,
    OfertasComponent,
    FooterInscribirseComponent
  ]
})
export class ComponentsModule { }
