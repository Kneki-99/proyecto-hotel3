import { Component, EventEmitter, Output } from '@angular/core';
import { ApiServiceTs } from '../../../service/api-service.ts';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formhabitacion',
  imports: [FormsModule],
  templateUrl: './formhabitacion.html',
  styleUrl: './formhabitacion.css',
})
export class Formhabitacion {
 
  numero: string = '';
  tipoHabitacion: string = '';
  precioNoche: number = 0;
  estado: string = '';

  @Output() accionRealizada = new EventEmitter<any>();

  constructor(private ApiService: ApiServiceTs) { };

  guardar() {
    let datos = {     
      'numero': this.numero,
      'tipo': this.tipoHabitacion,
      'precionoche': this.precioNoche,
      'estado': this.estado,
    };

    this.ApiService.guardarHabitacion(datos).subscribe({
      next: (result) => {
        console.log(result);
        this.accionRealizada.emit(1);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
