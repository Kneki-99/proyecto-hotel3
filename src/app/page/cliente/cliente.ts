import { Component } from '@angular/core';
import { Menu } from '../../component/menu/menu';
import { Formcliente } from "../../component/cliente/formcliente/formcliente";
import { Listacliente } from "../../component/cliente/listacliente/listacliente";

@Component({
  selector: 'app-cliente',
  imports: [Menu, Formcliente, Listacliente],
  templateUrl: './cliente.html',
  styleUrl: './cliente.css',
})
export class Cliente {
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
