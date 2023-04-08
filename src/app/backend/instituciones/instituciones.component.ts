import { Component, OnInit } from '@angular/core';
import { Institucion1 } from 'src/app/models/models';

@Component({
  selector: 'app-instituciones',
  templateUrl: './instituciones.component.html',
  styleUrls: ['./instituciones.component.scss'],
})
export class InstitucionesComponent  implements OnInit {

  institucion: Institucion1[] = [];

  constructor() { }

  ngOnInit() {
    this.loadInstituciones();
  }

  loadInstituciones() {
    this.institucion = [
      {
        nombre: 'USAE',
        planta: 'Planta alta',
        piso: 'piso 1'
      }
    ]
  }
}
