import { Component, OnInit } from '@angular/core';
import { ApiServiceTs } from '../../../service/api-service.ts';

@Component({
  selector: 'app-listacliente',
  imports: [],
  templateUrl: './listacliente.html',
  styleUrl: './listacliente.css',
})
export class Listacliente implements OnInit {
  data: any;
  constructor(private ApiService: ApiServiceTs) { };
  ngOnInit(): void {
    this.cargar();
  }
  cargar() {
    this.ApiService.getCliente().subscribe({
      next: (result) => {
        console.log(result);
        this.data = result;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
