import { Component, EventEmitter, Output } from '@angular/core';
import { ApiServiceTs } from '../../../service/api-service.ts';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formreservahabitacion',
  imports: [FormsModule],
  templateUrl: './formreservahabitacion.html',
  styleUrl: './formreservahabitacion.css',
})
export class Formreservahabitacion {
id: number = 0;
  idCliente: string = '';
  idHabitacion: string = '';
  fechaEntrada: string = '';
  fechaSalida: string = '';
  total: number = 0;
  estado: string = '';

  @Output() accionRealizada = new EventEmitter<any>();

  constructor(private ApiService: ApiServiceTs) { }

  guardar() {

    let datos = {
      id: this.id,
      idCliente: this.idCliente,
      idHabitacion: this.idHabitacion,
      fechaEntrada: this.fechaEntrada,
      fechaSalida: this.fechaSalida,
      total: this.total,
      estado: this.estado
    };

    this.ApiService.guardarReserva(datos).subscribe({
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
