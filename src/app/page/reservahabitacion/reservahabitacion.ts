import { Component } from '@angular/core';
import { Menu } from '../../component/menu/menu';
import { listareservahabitacion } from '../../component/reserva/listareservahabitacion/listareservahabitacion';
import { Formreservahabitacion } from '../../component/reserva/formreservahabitacion/formreservahabitacion';

@Component({
  selector: 'app-reservahabitacion',
  imports: [Menu, listareservahabitacion, Formreservahabitacion],
  templateUrl: './reservahabitacion.html',
  styleUrl: './reservahabitacion.css',
})
export class reservahabitacion {
  lista: Boolean = true;

  mostrar() {
    if (this.lista) {
      this.lista = false;
    } else {
      this.lista = true;
    }
  }

  recargar() {
    this.mostrar();
  }
}
