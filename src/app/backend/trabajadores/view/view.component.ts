import { Component, OnInit } from '@angular/core';
import Trabajador from 'src/app/interfaces/trabajador.interface';
import { TrabajadorService } from 'src/app/services/trabajador.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent  implements OnInit {

  trabajo: Trabajador[];

  constructor(
    private trabajadorService: TrabajadorService
  ) {
    this.trabajo = [{
        area: 'USAE',
        piso: '1',
        nImss: '1',
        nombre: '1',
        apellidoPate: '1',
        apellidoMate: '1',
        fechaNaci: '1',
        domicilio: '1',
        colonia: '1',
        municipio: '1',
        telefono: '1',
        peso: '1',
        talla: '1',
        restrMedica: '1',
        enfermePadezca: '1',
        recibeTrata: 'Si',
        motivo: '1',
        medicamento: '1',
        dosis: '1',
        horario: '1',
        hospitalizado: 'Si',
        causas: '1',
        edad: '1',
        observaciones: '1',
        alergias: 'Si',
        medicamentos: '1',
        alimentos: '1',
        insectos: '1',
        otros: '1',
        nombreEmger: '1',
        parentesco: '1',
        telefono2: '1',
        nombreEmger2: '1',
        parentesco2: '1',
        telefono3: '1',
        clinica: '1',
    }];
  }

  ngOnInit(): void {
    this.trabajadorService.getPlaces().subscribe(trabajo => {
      this.trabajo = trabajo;
    })
  }

}
