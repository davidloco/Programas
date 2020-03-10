import { Component, OnInit } from '@angular/core';
import { ProgramasService } from 'src/app/services/programas.service';
import { RespuestaTopHeadlines } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {

  programas: RespuestaTopHeadlines[] = [];

  constructor(private programasServices: ProgramasService) { }

  ngOnInit() {
    this.programasServices.getTopHeadlines().subscribe((resp: RespuestaTopHeadlines) => {

      console.log('programas', resp);

      this.programas.push(...resp);
    });
  }

}
