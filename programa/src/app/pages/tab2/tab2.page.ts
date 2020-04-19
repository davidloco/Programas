import { Component, OnInit } from '@angular/core';
import { ProgramasService } from 'src/app/services/programas.service';
import { Nivel } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {

  programas: Nivel[] = [];
  textoBuscar= '';

  constructor(private programasServices: ProgramasService){}

  ngOnInit() {
    this.programasServices.getTopHeadlines().subscribe(resp => {
      this.programas.push(...resp.nivel);
    });
  }

  buscarNivel(event){
    this.textoBuscar = event.target.value;
  }

  updateList(ev) {
    this.programasServices.getTopHeadlinesFind(ev.target.value).subscribe(resp => {
      this.programas.push(...resp.nivel);
    });    
  }
}
