import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { ProgramaComponent } from './programa/programa.component';
import { ProgramasComponent } from './programas/programas.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ProgramaComponent,
    ProgramasComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ProgramasComponent
  ]
})
export class ComponentsModule { }
