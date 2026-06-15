import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart } from '../cart';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito {

  constructor(public cartService: Cart) {}

}