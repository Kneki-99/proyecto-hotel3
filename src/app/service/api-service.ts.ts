import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceTs {

  private apiUrl = "http://localhost/backend/public/hotel/";
  
  constructor(private http: HttpClient) { }

  getCliente(): Observable<any> {
    return this.http.get(this.apiUrl + "lista").pipe(res => res);
  }
  public guardarCliente(datos: any): Observable<any> {
    return this.http.post(this.apiUrl + "nuevo_cliente", datos).pipe(res => res);
  }
  getHabitacion(): Observable<any> {
    return this.http.get(this.apiUrl + "habitaciones").pipe(res => res);
  }
  public guardarHabitacion(datos: any): Observable<any> {
    return this.http.post(this.apiUrl + "nueva_habitacion ", datos).pipe(res => res);
  }
  getReserva(): Observable<any> {
    return this.http.get(this.apiUrl + "reserva").pipe(res => res);
  }
  public guardarReserva(datos: any): Observable<any> {
    return this.http.post(this.apiUrl + "nueva_reserva ", datos).pipe(res => res);
  }
}

