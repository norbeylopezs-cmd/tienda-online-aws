import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cart } from '../cart';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {

  email = '';
  nombre = '';
  apellido = '';
  tipoDocumento = '';
  numeroDocumento = '';

  mensajeError = '';
  compraExitosa = false;

  constructor(
  public cartService: Cart
) {}
  pagar() {
    this.mensajeError = '';
    this.compraExitosa = false;

    if (
      !this.email ||
      !this.nombre ||
      !this.apellido ||
      !this.tipoDocumento ||
      !this.numeroDocumento
    ) {
      this.mensajeError = 'Debes completar todos los campos obligatorios.';
      return;
    }

    

    this.compraExitosa = true;
  }

}