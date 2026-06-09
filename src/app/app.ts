import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Configuración del componente principal
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

   // Lista de productos disponibles en la tienda
  products = [
    {
      name: 'Camiseta Negra',
      price: 80000,
      image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600'
    },
    {
      name: 'Camisa Azul',
      price: 120000,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600'
    },
    {
      name: 'Chaqueta Deportiva',
      price: 180000,
       image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600'
    },
    {
      name: 'Jean Azul',
      price: 95000,
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600'
    }
  ];
  // Carrito de compras
  cart: any[] = [];

  // Total acumulado de compra
  total = 0;

  // Agrega productos al carrito y actualiza el total
  addToCart(productName: string, price: number) {

    this.cart.push({
      name: productName,
      price: price
    });

    this.total += price;

    console.log(this.cart);
  }
  // Elimina productos del carrito
  removeFromCart(index: number) {

    this.total -= this.cart[index].price;

    this.cart.splice(index, 1);
  }
}