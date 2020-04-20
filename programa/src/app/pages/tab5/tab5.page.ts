import { Component, OnInit } from '@angular/core';
import { Nivel } from 'src/app/interfaces/interfaces';
import { ProgramasService } from 'src/app/services/programas.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  niveles: Nivel[] = [];
  textoBuscar= '';

  constructor(private programasServices: ProgramasService){}

  ngOnInit() {
    this.programasServices.getTopHeadlines().subscribe(resp => {
      this.niveles.push(...resp.nivel);
    });
  }

  buscarNivel(event){
    this.textoBuscar = event.target.value;
  }
}
