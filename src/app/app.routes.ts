import { Routes } from '@angular/router';
import { Carrito } from './carrito/carrito';
import { Mujer } from './mujer/mujer';
import { ProductoDetalle } from './producto-detalle/producto-detalle';
import { Checkout } from './checkout/checkout';

export const routes: Routes = [
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
  },
  {
    path: 'checkout',
    component: Checkout
  },
];