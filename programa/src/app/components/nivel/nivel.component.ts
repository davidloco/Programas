import { Component, OnInit, Input } from '@angular/core';
import { Nivel } from 'src/app/interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-nivel',
  templateUrl: './nivel.component.html',
  styleUrls: ['./nivel.component.scss'],
})
export class NivelComponent implements OnInit {

  @Input() nivel: Nivel;

  constructor(private iab: InAppBrowser) { }

  ngOnInit() {}

  abrirNivel() {
    const browser = this.iab.create(this.nivel.nombre, '_system');
  }

}
