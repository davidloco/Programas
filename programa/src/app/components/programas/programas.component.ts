import { Component, OnInit, Input } from '@angular/core';
import { Programa } from 'src/app/interfaces/programa.model';

@Component({
  selector: 'app-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.scss'],
})
export class ProgramasComponent implements OnInit {

  @Input() programas: Programa[] = [];
  @Input() textoBuscar: string;
  @Input() enFavoritos = false;

  constructor() { }

  ngOnInit() {}

}
