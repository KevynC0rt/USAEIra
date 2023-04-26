import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TrabajadorService } from 'src/app/services/trabajador.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent  implements OnInit {

  formulario: FormGroup;

  constructor(
    private trabajadorService: TrabajadorService
  ) {
    this.formulario = new FormGroup({
      area: new FormControl(),
      piso: new FormControl(),
      nImss: new FormControl(),
      nombre: new FormControl(),
      apellidoPate: new FormControl(),
      apellidoMate: new FormControl(),
      fechaNaci: new FormControl(),
      domicilio: new FormControl(),
      colonia: new FormControl(),
      municipio: new FormControl(),
      telefono: new FormControl(),
      peso: new FormControl(),
      talla: new FormControl(),
      restrMedica: new FormControl(),
      enfermePadezca: new FormControl(),
      recibeTrata: new FormControl(),
      motivo: new FormControl(),
      medicamento: new FormControl(),
      dosis: new FormControl(),
      horario: new FormControl(),
      hospitalizado: new FormControl(),
      causas: new FormControl(),
      edad: new FormControl(),
      observaciones: new FormControl(),
      alergias: new FormControl(),
      medicamentos: new FormControl(),
      alimentos: new FormControl(),
      insectos: new FormControl(),
      otros: new FormControl(),
      nombreEmger: new FormControl(),
      parentesco: new FormControl(),
      telefono2: new FormControl(),
      nombreEmger2: new FormControl(),
      parentesco2: new FormControl(),
      telefono3: new FormControl(),
      clinica: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.trabajadorService.addPlace(this.formulario.value);
    console.log(response);
  }

}
