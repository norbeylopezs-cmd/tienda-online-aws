import { Routes } from '@angular/router';
import { App } from './app';
import { Carrito } from './carrito/carrito';
import { Mujer } from './mujer/mujer';

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
    path: 'mujer',
    component: Mujer
  }
];