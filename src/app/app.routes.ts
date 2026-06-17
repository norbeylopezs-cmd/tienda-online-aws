import { Routes } from '@angular/router';
import { App } from './app';
import { Carrito } from './carrito/carrito';
import { Mujer } from './mujer/mujer';
import { ProductoDetalle } from './producto-detalle/producto-detalle';

export const routes: Routes = [
  {
    path: '',
    component: App
  },
  {
    path: 'carrito',
    component: Carrito
  },
  {
  path: 'producto-detalle',
  component: ProductoDetalle
  },
  {
    path: 'mujer',
    component: Mujer
  }
];