import { Component, OnInit, Input } from '@angular/core';
import { Nivel } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.scss'],
})
export class ProgramasComponent implements OnInit {

  @Input() programas: Nivel[] = [];
  @Input() enFavoritos = false;

  constructor() { }

  ngOnInit() {}

}
