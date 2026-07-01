import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cart } from '../cart';
import { CheckoutApi } from '../services/checkout-api';

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
  mostrarModalCompra = false;
  procesandoCompra = false;

  constructor(
  public cartService: Cart,
  private checkoutApi: CheckoutApi
) {}
  pagar() {
    this.mensajeError = '';
    this.compraExitosa = false;
    this.procesandoCompra = false;
    this.mostrarModalCompra = false;


    

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

      this.procesandoCompra = false;
      this.compraExitosa = true;
      this.mostrarModalCompra = true;

      const pedido = {
      email: this.email,
      nombre: this.nombre,
      apellido: this.apellido,
      tipoDocumento: this.tipoDocumento,
      numeroDocumento: this.numeroDocumento,
      total: this.cartService.total,
      productos: this.cartService.cart
    };

    this.checkoutApi.guardarPedido(pedido).subscribe({
      next: () => {},

      error: (error) => {
        console.error('ERROR AWS:', error);
      }
    });
  }
  continuarComprando(): void {
  this.mostrarModalCompra = false;
  window.location.href = '/';
}
}