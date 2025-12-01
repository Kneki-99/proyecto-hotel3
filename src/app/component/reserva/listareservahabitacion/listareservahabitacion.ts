import { Component, OnInit } from '@angular/core';
import { ApiServiceTs } from '../../../service/api-service.ts';

@Component({
  selector: 'app-listareservahabitacion',
  imports: [],
  templateUrl: './listareservahabitacion.html',
  styleUrl: './listareservahabitacion.css',
})
export class listareservahabitacion implements OnInit {
  data: any;
  constructor(private ApiService: ApiServiceTs) { };
  ngOnInit(): void {
    this.cargar();
  }
  cargar() {
    this.ApiService.getReserva().subscribe({
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
