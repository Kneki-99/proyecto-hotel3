import { Routes } from '@angular/router';
import { Inicio } from './page/inicio/inicio';
import { Cliente } from './page/cliente/cliente';
import { Habitacion } from './page/habitacion/habitacion';
import { reservahabitacion } from './page/reservahabitacion/reservahabitacion';

export const routes: Routes = [
    { path: '', component: Inicio },
    { path: 'cliente', component: Cliente },
    { path: 'habitacion', component: Habitacion },
    { path: 'reserva', component: reservahabitacion },
];
