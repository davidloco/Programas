import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProgramasService } from 'src/app/services/programas.service';
import { Oferta, OfertaObject } from 'src/app/interfaces/ofertInterfaces';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.page.html',
  styleUrls: ['./oferta.page.scss'],
})
export class OfertaPage implements OnInit {

  nombre_programa: string;
  nombre_jornada: string;
  nombre_centro: string;
  nombre_region: string;
  departamento: string;
  municipio: string;
  imagen_banner: string;

  constructor(private route: ActivatedRoute, private router: Router, private programasServices: ProgramasService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.programasServices.getOfertsFind(params['oferta_id']).subscribe((resp: OfertaObject) => {
        console.log(resp.oferta);
        this.nombre_programa = resp.oferta[0].nombre_programa;
        this.nombre_jornada = resp.oferta[0].nombre_jornada;
        this.nombre_centro = resp.oferta[0].nombre_centro;
        this.nombre_region = resp.oferta[0].nombre_region;
        this.departamento = resp.oferta[0].departamento;
        this.municipio = resp.oferta[0].municipio;
        this.imagen_banner = resp.oferta[0].imagen_banner;
    


      });
    });
  }

}
