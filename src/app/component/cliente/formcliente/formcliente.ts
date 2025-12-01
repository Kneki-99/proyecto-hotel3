import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiServiceTs } from '../../../service/api-service.ts';

@Component({
  selector: 'app-formcliente',
  imports: [FormsModule],
  templateUrl: './formcliente.html',
  styleUrl: './formcliente.css',
})
export class Formcliente {
  codigo: string = '';
  nombre: string = '';
  apellido: string = '';
 
  fechaEntrada: string = '';
  fechaSalida: string = '';
  tipoHabitacion: string = '';

  @Output() accionRealizada = new EventEmitter<any>();

  constructor(private ApiService: ApiServiceTs) { };

  guardar() {
    let datos = {
      'codigo': this.codigo,
      'nombre': this.nombre,
      'apellido': this.apellido,     
      'tipoHabitacion': this.tipoHabitacion,
    };

      this.ApiService.guardarCliente(datos).subscribe({
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
