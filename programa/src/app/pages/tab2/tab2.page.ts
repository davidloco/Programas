import { Component, OnInit } from '@angular/core';
import { ProgramasService } from 'src/app/services/programas.service';
import { Programa } from 'src/app/interfaces/programa.model';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {

  programas: Programa[] = [];
  textoBuscar = '';

  constructor(private programasServices: ProgramasService,
              public loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.programasServices.getProgramas().subscribe(resp => {
      this.programas.push(...resp.programa);
    });
  }

  buscarPrograma(event) {
    this.textoBuscar = event.target.value;
  }

  updateList(ev) {
    this.programasServices.getProgramasFind(ev.target.value).subscribe(resp => {
      this.programas.push(...resp.programa);
    });
  }  
}
