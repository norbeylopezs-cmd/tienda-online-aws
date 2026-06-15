import { Routes } from '@angular/router';
import { App } from './app';
import { Carrito } from './carrito/carrito';

export const routes: Routes = [
  {
    path: '',
    component: App
  },
  {
    path: 'carrito',
    component: Carrito
  }
];