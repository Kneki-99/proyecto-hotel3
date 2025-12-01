import { Component } from '@angular/core';
import { ApiServiceTs } from '../../../service/api-service.ts';

@Component({
  selector: 'app-listahabitacion',
  imports: [],
  templateUrl: './listahabitacion.html',
  styleUrl: './listahabitacion.css',
})
export class Listahabitacion {
  data: any;
  constructor(private ApiService: ApiServiceTs) { };
  ngOnInit(): void {
    this.cargar();
  }
  cargar() {
    this.ApiService.getHabitacion().subscribe({
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
