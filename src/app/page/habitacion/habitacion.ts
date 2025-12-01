import { Component } from '@angular/core';
import { Listahabitacion } from "../../component/habitacion/listahabitacion/listahabitacion";
import { Formhabitacion } from "../../component/habitacion/formhabitacion/formhabitacion";
import { Menu } from "../../component/menu/menu";

@Component({
  selector: 'app-habitacion',
  imports: [Listahabitacion, Formhabitacion, Menu],
  templateUrl: './habitacion.html',
  styleUrl: './habitacion.css',
})
export class Habitacion {
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
