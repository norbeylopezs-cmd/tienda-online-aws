import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  products = [
    {
      name: 'Camiseta Negra',
      price: 80000
    },
    {
      name: 'Camisa Azul',
      price: 120000
    },
    {
      name: 'Chaqueta Deportiva',
      price: 180000
    },
    {
      name: 'Jean Azul',
      price: 95000
    }
  ];

  cart: any[] = [];

  total = 0;

  addToCart(productName: string, price: number) {

    this.cart.push({
      name: productName,
      price: price
    });

    this.total += price;

    console.log(this.cart);
  }

  removeFromCart(index: number) {

    this.total -= this.cart[index].price;

    this.cart.splice(index, 1);
  }
}