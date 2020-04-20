import { Component, OnInit, Input } from '@angular/core';
import { Nivel } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-niveles',
  templateUrl: './niveles.component.html',
  styleUrls: ['./niveles.component.scss'],
})
export class NivelesComponent implements OnInit {

  @Input() niveles: Nivel[] = [];
  @Input() textoBuscar: string;

  constructor() { }

  ngOnInit() {}

}
